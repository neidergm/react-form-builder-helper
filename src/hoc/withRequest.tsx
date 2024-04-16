import { ComponentType, forwardRef, useEffect, useState } from "react";
import { FieldTypes } from "../interfaces/fields.interface";
import { useWatch } from "react-hook-form";
import requestParamsMapper from "../utils/requestParamsMapper";

const withRequest = (WrappedComponent: ComponentType<any>): ComponentType => {
    const MyComp = forwardRef(
        ({ request, doRequest, control, dependsOn, ...props }: FieldTypes & any, ref) => {

            const value = useWatch({ control, name: dependsOn })

            const [data, setData] = useState<any>({});

            console.log({ request }, { props })

            useEffect(() => {
                if (request) {
                    const { url, method, params } = requestParamsMapper({...request}, {[dependsOn]:value});

                    if (doRequest) {
                        control
                        doRequest?.(url, method, params).then((response: any) => {
                            setData(response)
                        });
                    }
                }
            }, [value])

            return <WrappedComponent
                {...props}
                {...data}
                ref={ref} />
        }
    )
    return MyComp
}


export default withRequest;