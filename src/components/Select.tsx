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



// import { ComponentType, SelectHTMLAttributes, forwardRef, useEffect, useRef } from "react"
// import classnames from "classnames"
// import { SelectConfig } from "../interfaces/fields.interface"
// import { SELECT_CLASSNAME } from "../classNames"
// import mapOptions from "../utils/fieldOptionsMapper"

// type Props = {
//     Element?: ComponentType,
// } & SelectHTMLAttributes<HTMLSelectElement> & Pick<SelectConfig, "options" | "placeholder">

// const Select = forwardRef<HTMLSelectElement, Props>(
//     ({
//         Element = "select",
//         options,
//         placeholder,
//         ...props
//     }, ref) => {

//         const selectRef = useRef<HTMLSelectElement | null>(null);

//         const elementProps = {
//             ...props,
//             [typeof Element === "string" ? "ref" : "innerRef"]: (node: never) => {
//                 selectRef.current = node;
//                 if (typeof ref === 'function') ref(node)
//             }
//         }
//         const isControlled = "value" in elementProps;

//         if (!options?.length) {
//             elementProps.disabled = true
//         }

//         if (typeof Element === "string") {
//             elementProps.className = classnames(SELECT_CLASSNAME, elementProps.className);
//         }

//         if (elementProps.multiple && isControlled) {
//             elementProps.onChange = (e) => {
//                 const selectedOptions = Array.from(e.target.selectedOptions, option => option.value).filter(i => i);
//                 props.onChange?.(selectedOptions as never);
//             }
//         }

//         useEffect(() => {
//             if (!isControlled && selectRef.current && options && elementProps.defaultValue) {
//                 if (elementProps.multiple && Array.isArray(elementProps.defaultValue)) {
//                     elementProps.defaultValue.forEach(value => {
//                         const option = selectRef.current?.querySelector(`option[value="${value}"]`);
//                         if (option) (option as HTMLOptionElement).selected = true;
//                     });
//                 } else {
//                     selectRef.current.value = elementProps.defaultValue as string;
//                 }
//             }
//         }, [options, elementProps.defaultValue, isControlled, elementProps.multiple]);

//         return (
//             <Element {...elementProps} >
//                 <option value="">{placeholder || "Seleccione..."}</option>
//                 {options && mapOptions(options, (label, value, index) =>
//                     <option value={value} key={`${value}-${index}`}>{label}</option>
//                 )}
//             </Element>
//         )
//     }
// )

// export default Select