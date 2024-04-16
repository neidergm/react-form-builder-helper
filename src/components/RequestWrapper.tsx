import { ComponentType, forwardRef, useEffect, useState } from 'react'
import { WithRequestConfig } from '../interfaces/fields.interface';
import { I_JsonObject } from '../interfaces/generic.interfaces';
import requestParamsMapper from '../utils/requestParamsMapper';
import { Control, useWatch } from 'react-hook-form';

type Props = {
    Child: ComponentType,
    control: Control,
} & WithRequestConfig & I_JsonObject

const RequestWrapper = forwardRef(({
    Child,
    request,
    doRequest,
    control,
    dependsOn,
    ...props
}: Props, ref) => {

    const [data, setData] = useState<any>({});

    const parentValue = useWatch({ name: dependsOn, control })

    useEffect(() => {
        if (request) {
            if (!["", undefined, null].includes(parentValue)) {
                setData({ options: null })

                const { url, method, params } = requestParamsMapper({ ...request }, { [dependsOn]: parentValue });
                doRequest?.(url, method, params).then((newData: typeof data) => {
                    setData(newData)
                }).catch(() => {
                    setData([])
                });
            } else {
                setData(props)
            }
        }
    }, [parentValue])

    return <Child
        {...props}
        {...data}
        ref={ref}
    />
}
)

export default RequestWrapper;
