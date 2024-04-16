import { ComponentType, createElement, useEffect, useState } from 'react'
import { WithRequestConfig } from '../interfaces/fields.interface';
import { I_JsonObject } from '../interfaces/generic.interfaces';

type Props = {
    Element: ComponentType,

} & WithRequestConfig & I_JsonObject

const RequestWrapper = ({
    Element,
    request,
    doRequest,
    ...props
}: Props) => {

    const [data, setData] = useState<any>({});

    useEffect(() => {
        if (request) {
            let result;
            const { url, method, params } = request;

            if (doRequest) {
                result = doRequest?.(url, method, params);
            } else {
                const options: I_JsonObject = {
                    method,
                    headers: { "Content-Type": "application/json" },
                }
                if (method.toUpperCase() === "POST") {
                    options.body = JSON.stringify(params)
                }
                result = fetch(url, options).then(r => r.json());
            }

            result.then((response: any) => {
                setData(response)
            })
        }
    }, [])


    // createElement(Element, { ...props, ...data });

    return <Element
        {...props}
        {...data}
    />
}

export default RequestWrapper