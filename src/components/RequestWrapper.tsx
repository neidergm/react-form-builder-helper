import { ComponentType, Ref, forwardRef, useEffect, useRef, useState } from 'react'
import { WithRequestConfig } from '../interfaces/fields.interface';
import requestParamsMapper from '../utils/requestParamsMapper';
import { I_JsonObject } from '../interfaces/generic.interfaces';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Child: ComponentType<any>,
} & WithRequestConfig
    & I_JsonObject

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
        const { url, method, params } = req;
        doRequest?.(url, method, params).then(newData => {
            setData(newData)
        }).catch(() => {
            setData({})
        });
    }

    useEffect(() => {
        if (request) {
            if (parentValue) {
                // controlled && props.onChange("")

                //Verificar cuando un padre tiene valor por defecto, que el hijo haga lo suyo
                if (firstLoad.current) {
                    props.value && (firstLoad.current = false)
                } else {
                    !props.value && (firstLoad.current = true)
                    props.onChange("")
                }
                // console.log({props, parentValue})
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
