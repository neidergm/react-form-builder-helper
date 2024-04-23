/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, InputHTMLAttributes, forwardRef } from "react"
import { default as Lbl } from "./Label"
import classnames from 'classnames'
import { RadioConfig } from "../interfaces/fields.interface"
import mapOptions from "../utils/fieldOptionsMapper"

type Props = {
    invalid?: boolean,
    Label?: string | ComponentType,
    Element?: ComponentType<any> | string,
    options: NonNullable<RadioConfig["options"]>,
} & InputHTMLAttributes<HTMLInputElement>

const Radio = forwardRef<unknown, Props>(
    ({
        Element = "input",
        Label,
        options,
        id,
        ...props
    }, ref) => {
        const elementProps = {
            ...props,
            type: "radio",
            [typeof Element === "string" ? "ref" : "innerRef"]: ref
        }

        if (typeof Element === "string") {
            elementProps.className = classnames("form-check-input", elementProps.className);
            delete elementProps.invalid;
        }

        return (<>
            {
                mapOptions(options, (label, value, index) =>
                    <div className="form-check" key={value}>
                        <Element {...elementProps} value={value} id={`${id}-${index}`}/>
                        <Lbl Element={Label} htmlFor={`${id}-${index}`} check>{label}</Lbl>
                    </div >
                )
            }
        </>
        )
    }
)
export default Radio
