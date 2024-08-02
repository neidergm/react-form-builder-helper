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
    const clearValueWhenParentChange = useRef(false);

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
                if (clearValueWhenParentChange.current) props.onChange("")

                if (Object.values(parentValue as I_JsonObject).every(i => ["", undefined, null].includes(i))) {
                    setData({})
                } else {
                    if (!clearValueWhenParentChange.current) clearValueWhenParentChange.current = true
                    getData(requestParamsMapper(request, parentValue));
                }
            } else {
                getData(request);
            }
        }
    }, Object.values(parentValue || {}))

    return <Child {...props} {...data} ref={ref} />
}
)

export default RequestWrapper;
