/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, forwardRef, useEffect, useState } from 'react'
import { WithRequestConfig } from '../interfaces/fields.interface';
import requestParamsMapper from '../utils/requestParamsMapper';
import { I_JsonObject } from '../interfaces/generic.interfaces';

type Props = {
    Child: ComponentType,
} & WithRequestConfig & I_JsonObject

const RequestWrapper = forwardRef(({
    Child,
    request,
    doRequest,
    parentValue,
    controlled,
    ...props
}: Props, ref) => {
    console.log(props.name, parentValue)
    const [data, setData] = useState<any>({});

    const getData = (req: typeof request) => {
        setData({ options: null })
        const { url, method, params } = req;

        doRequest?.(url, method, params).then((newData: typeof data) => {
            setData(newData)
        }).catch(() => {
            setData({})
        });
    }

    useEffect(() => {
        if (request) {
            if (parentValue) {
                controlled && props.onChange("")
                if (!["", undefined, null].includes(Object.values(parentValue as I_JsonObject)[0])) {
                    getData(requestParamsMapper(request, parentValue));
                } else {
                    setData({})
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
