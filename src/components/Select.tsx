import { ComponentType, SelectHTMLAttributes, forwardRef } from "react"
import classnames from "classnames"
import { SelectConfig } from "../interfaces/fields.interface"
import { SELECT_CLASSNAME } from "../classNames"
import mapOptions from "../utils/fieldOptionsMapper"

type Props = {
    Element?: ComponentType,
} & SelectHTMLAttributes<HTMLSelectElement> & Pick<SelectConfig, "options" | "placeholder">

const Select = forwardRef<unknown, Props>(
    ({
        Element = "select",
        options,
        placeholder,
        ...props
    }, ref) => {
        const elementProps = {
            ...props,
            [typeof Element === "string" ? "ref" : "innerRef"]: ref
        }

        if (!options?.length) {
            elementProps.disabled = true
        }

        if (typeof Element === "string") {
            elementProps.className = classnames(SELECT_CLASSNAME, elementProps.className);
        }

        if (elementProps.multiple && "value" in elementProps) {
            elementProps.onChange = (e) => {
                const selectedOptions = Array.from(e.target.selectedOptions, option => option.value).filter(i => i);
                props.onChange?.(selectedOptions as never);
            }
        }

        return (
            <Element {...elementProps} >
                <option value="">{placeholder || "Seleccione..."}</option>
                {options && mapOptions(options, (label, value, index) =>
                    <option value={value} key={`${value}-${index}`}>{label}</option>
                )}
            </Element>
        )
    }
)

export default Select

