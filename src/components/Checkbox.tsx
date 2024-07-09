import { ComponentType, InputHTMLAttributes, forwardRef } from "react"
import { default as Lbl } from "./Label"
import classnames from 'classnames'
import { CheckboxConfig } from "../interfaces/fields.interface";
import mapOptions from "../utils/fieldOptionsMapper";
import { I_JsonObject } from "../interfaces/generic.interfaces";
import {
    CHECKBOX_CLASSNAME,
    CHECKBOX_INLINE_CLASSNAME,
    CHECKBOX_LABEL_CLASSNAME,
    CHECKBOX_WRAPPER_CLASSNAME,
    INVALID_CLASSNAME
} from "../classNames";

type Props = Omit<CheckboxConfig, "validations" | "wrapperClassName"> & {
    Label?: string | ComponentType,
    Element?: ComponentType<InputHTMLAttributes<HTMLInputElement>> | string,
    placeholder?: string,
    invalid?: boolean,
}

const Checkbox = forwardRef<unknown, Props>(
    ({
        Element = "input",
        Label,
        label,
        defaultValue,
        type,
        options,
        id,
        inline,
        invalid,
        placeholder,
        ...props
    }, ref) => {
        const elementProps: I_JsonObject = {
            ...props,
            type: "checkbox",
            [typeof Element === "string" ? "ref" : "innerRef"]: ref
        }

        if (typeof Element === "string") {
            Element = "input";
            elementProps.className = classnames(CHECKBOX_CLASSNAME, elementProps.className);
        }

        if (!options && !!placeholder && type !== "simple") {
            type = "simple";
            elementProps.disabled = true;
            elementProps.checked = false;
            label = placeholder;
        }

        if (type !== "simple") {
            if (!options) return <></>

            //Its controlled
            if (elementProps.value) {
                elementProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const currentValue = Array.isArray(elementProps.value) ? elementProps.value : [];
                    const newValue = e.target.checked
                        ? [...currentValue, e.target.value]
                        : currentValue.filter(i => i !== e.target.value);
                    props.onChange?.(newValue as never);
                }
            }

            return (<div className={classnames({ [INVALID_CLASSNAME]: invalid })}>
                {
                    mapOptions(options, (label, value, index) => {
                        if (elementProps.value) {
                            if (Array.isArray(elementProps.value)) elementProps.checked = elementProps.value.includes(value);
                        } else {
                            elementProps.defaultChecked = (defaultValue as Array<string>)?.includes(value);
                        }

                        return <div className={classnames(CHECKBOX_WRAPPER_CLASSNAME, { [CHECKBOX_INLINE_CLASSNAME]: inline })} key={value}>
                            <Element {...elementProps} value={value} id={`${id}-${index}`} />
                            <Lbl Element={Label} htmlFor={`${id}-${index}`} className={CHECKBOX_LABEL_CLASSNAME}>{label}</Lbl>
                        </div >
                    })
                }
            </div>)
        }

        if (defaultValue) elementProps.defaultChecked = defaultValue;

        return (
            <div className={classnames(CHECKBOX_WRAPPER_CLASSNAME, { [INVALID_CLASSNAME]: invalid })}>
                <Element {...elementProps} id={id} />
                <Lbl Element={Label} htmlFor={id} className={CHECKBOX_LABEL_CLASSNAME}>{label}</Lbl>
            </div>
        )
    }
)

export default Checkbox;
