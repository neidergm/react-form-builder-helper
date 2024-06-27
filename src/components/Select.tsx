import { ComponentType, SelectHTMLAttributes, forwardRef } from "react"
import classnames from "classnames"
import { SelectConfig } from "../interfaces/fields.interface"
import { SELECT_CLASSNAME } from "../classNames"

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

        return (
            <Element {...elementProps} >
                <option value="">{placeholder || "Seleccione..."}</option>
                {options?.map((o, i) => {
                    typeof o === "string" && (o = { value: o, label: o });
                    return <option value={o.value} key={`${o.value}-${i}`}>{o.label}</option>
                }
                )}
            </Element>
        )
    }
)

export default Select