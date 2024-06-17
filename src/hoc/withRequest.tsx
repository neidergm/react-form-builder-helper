/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, forwardRef, useEffect, useState } from "react";
import { FieldTypes } from "../interfaces/fields.interface";
import { I_JsonObject } from "../interfaces/generic.interfaces";

const withRequest = (WrappedComponent: ComponentType<any>): ComponentType => {
    const MyComp = forwardRef(
        ({ request, doRequest, ...props }: FieldTypes & any, ref) => {
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

            return <WrappedComponent
                {...props}
                {...data}
                ref={ref} />
        }
    )
    return MyComp
}


export default withRequest;