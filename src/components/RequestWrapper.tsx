import { ComponentType, forwardRef, useEffect, useState } from 'react'
import { WithRequestConfig } from '../interfaces/fields.interface';
import { I_JsonObject } from '../interfaces/generic.interfaces';
import requestParamsMapper from '../utils/requestParamsMapper';

type Props = {
    Child: ComponentType,
} & WithRequestConfig & I_JsonObject

const RequestWrapper = forwardRef(({
    Child,
    request,
    doRequest,
    dependsOn,
    parentValue,
    ...props
}: Props, ref) => {

    const [data, setData] = useState<any>({});

    const getData = (req: typeof request) => {
        setData({ options: null })

        const { url, method, params } = req;

        doRequest?.(url, method, params).then((newData: typeof data) => {
            setData(newData)
        }).catch(() => {
            setData([])
        });
    }

    useEffect(() => {
        console.log(parentValue, dependsOn, request)

        if (request) {
            if (dependsOn) {
                if (!["", undefined, null].includes(parentValue))
                    getData(requestParamsMapper(request, { [dependsOn]: parentValue }));
                else
                    setData(props)
            } else {
                getData(request);
            }
        }
    }, [parentValue])

    return <Child {...props} {...data} ref={ref} />
}
)

export default RequestWrapper;
