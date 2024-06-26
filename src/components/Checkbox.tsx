import { ComponentType, InputHTMLAttributes, forwardRef } from "react"
import { default as Lbl } from "./Label"
import classnames from 'classnames'
import { CheckboxConfig } from "../interfaces/fields.interface";
import mapOptions from "../utils/fieldOptionsMapper";

type Props = {
    invalid?: boolean,
    Label?: string | ComponentType,
    Element?: ComponentType<InputHTMLAttributes<HTMLInputElement>> | string,
    type: CheckboxConfig["type"],
    options?: CheckboxConfig["options"],
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef<unknown, Props>(
    ({
        Element = "input",
        Label,
        children,
        defaultValue,
        type,
        options,
        id,
        ...props
    }, ref) => {

        const elementProps = {
            ...props,
            type: "checkbox",
            [typeof Element === "string" ? "ref" : "innerRef"]: ref
        }

        if (defaultValue) {
            elementProps.defaultChecked = defaultValue as never;
        }

        if (typeof Element === "string") {
            Element = "input";
            elementProps.className = classnames("form-check-input", elementProps.className);
            delete elementProps.invalid;
        }

        if (type !== "simple") {
            if (!options) return <></>
            return (<>
                {
                    mapOptions(options, (label, value, index) => {
                        if (Array.isArray(defaultValue)) {
                            elementProps.defaultChecked = defaultValue?.includes(value) as never;
                        }

                        return <div className="form-check" key={value}>
                            <Element {...elementProps} value={value} id={`${id}-${index}`} />
                            <Lbl Element={Label} htmlFor={`${id}-${index}`} check>{label}</Lbl>
                        </div >
                    }
                    )
                }
            </>)
        }

        return (
            <div className="form-check">
                <Element {...elementProps} id={id} />
                <Lbl Element={Label} htmlFor={id} check>{children}</Lbl>
            </div>
        )
    }
)

export default Checkbox;
