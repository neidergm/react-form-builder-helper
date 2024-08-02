import { ComponentType, Ref, forwardRef, useEffect, useRef, useState } from 'react'
import { FieldOption, WithRequestConfig } from '../interfaces/fields.interface';
import requestParamsMapper from '../utils/requestParamsMapper';
import { I_JsonObject } from '../interfaces/generic.interfaces';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Child: ComponentType<any>,
} & WithRequestConfig
    & I_JsonObject

const mapOptionsResult = (options: { [x: string]: unknown }[] | string[], mapOptions: { label: string, value: string }) => {
    return options.map(i => {
        if (typeof i === "object" && i !== undefined) {
            return { label: i[mapOptions.label], value: i[mapOptions.value] }
        }
        return { label: i, value: i }
    })
}

const RequestWrapper = forwardRef(({
    Child,
    request,
    doRequest,
    parentValue,
    loadingText,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    controlled,
    ...props
}: Props, ref: Ref<Props["Child"]>) => {
    const [data, setData] = useState<Partial<typeof props>>({});
    const firstLoad = useRef(true);

    const getData = (req: typeof request) => {
        setData({ options: null, placeholder: loadingText || "Loading..." })
        const { url, method, params, mapOptions } = req;
        doRequest?.(url, method, params).then(newData => {
            if (mapOptions && newData) {
                if (Array.isArray(newData)) {
                    setData({ options: mapOptionsResult(newData, mapOptions) })
                } else {
                    setData({ ...newData, options: mapOptionsResult(newData.options as FieldOption[], mapOptions) })
                }
            } else {
                setData(newData)
            }
        }).catch((e) => {
            console.log(e)
            setData({})
        });
    }

    useEffect(() => {
        if (request) {
            if (parentValue) {

                if (firstLoad.current) {
                    props.value && (firstLoad.current = false)
                } else {
                    !props.value && (firstLoad.current = true)
                    props.onChange("")
                }
                // if (firstLoad.current) {
                //     firstLoad.current = false
                // } else {
                //     props.onChange("")
                // }

                if (!["", undefined, null].includes(Object.values(parentValue as I_JsonObject)[0])) {
                    getData(requestParamsMapper(request, parentValue));
                } else {
                    setData({})
                }
            } else {
                getData(request);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, Object.values(parentValue || {}))

    return <Child {...props} {...data} ref={ref} />
}
)

export default RequestWrapper;
