import { ComponentType, SelectHTMLAttributes, forwardRef } from "react"
import classnames from "classnames"
import { SelectConfig } from "../interfaces/fields.interface"

type Props = {
    invalid?: boolean,
    Element?: ComponentType,
} & SelectHTMLAttributes<HTMLSelectElement> & Pick<SelectConfig, "options" | "placeholder" >

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

        if(!options?.length){
            elementProps.disabled = true
        }

        if (typeof Element === "string") {
            elementProps.className = classnames("form-select", elementProps.className);
            delete elementProps.invalid;
        }

        return (
            <Element {...elementProps} >
                <option value="">{options?.length ? (placeholder || "Seleccione...") : "Cargando..."}</option>
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