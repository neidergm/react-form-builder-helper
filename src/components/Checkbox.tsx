import { ComponentType, InputHTMLAttributes, forwardRef } from "react"
import { default as Lbl } from "./Label"
import classnames from 'classnames'
import { CheckboxConfig } from "../interfaces/fields.interface";
import mapOptions from "../utils/fieldOptionsMapper";
import { I_JsonObject } from "../interfaces/generic.interfaces";
import { CHECKBOX_CLASSNAME, CHECKBOX_INLINE_CLASSNAME, CHECKBOX_LABEL_CLASSNAME, CHECKBOX_WRAPPER_CLASSNAME } from "../classNames";

type Props = {
    id: string,
    children: unknown;
    type: CheckboxConfig["type"],
    Label?: string | ComponentType,
    Element?: ComponentType<InputHTMLAttributes<HTMLInputElement>> | string,
    options?: CheckboxConfig["options"],
    defaultValue?: unknown,
    className?: string,
    inline?: boolean,
}

const Checkbox = forwardRef<unknown, Props>(
    ({
        Element = "input",
        Label,
        children,
        defaultValue,
        type,
        options,
        id,
        inline,
        ...props
    }, ref) => {

        const elementProps: I_JsonObject = {
            ...props,
            type: "checkbox",
            [typeof Element === "string" ? "ref" : "innerRef"]: ref
        }

        if (defaultValue) {
            elementProps.defaultChecked = defaultValue as never;
        }

        if (typeof Element === "string") {
            Element = "input";
            elementProps.className = classnames(CHECKBOX_CLASSNAME, elementProps.className);
        }

        if (type !== "simple") {
            if (!options) return <></>
            return (<>
                {
                    mapOptions(options, (label, value, index) => {
                        if (Array.isArray(defaultValue)) {
                            elementProps.defaultChecked = defaultValue?.includes(value) as never;
                        }

                        return <div  className={classnames(CHECKBOX_WRAPPER_CLASSNAME, { [CHECKBOX_INLINE_CLASSNAME]: inline })} key={value}>
                            <Element {...elementProps} value={value} id={`${id}-${index}`} />
                            <Lbl Element={Label} htmlFor={`${id}-${index}`} className={CHECKBOX_LABEL_CLASSNAME}>{label}</Lbl>
                        </div >
                    }
                    )
                }
            </>)
        }

        return (
            <div className={CHECKBOX_WRAPPER_CLASSNAME}>
                <Element {...elementProps} id={id} />
                <Lbl Element={Label} htmlFor={id} className={CHECKBOX_LABEL_CLASSNAME}>{children as never}</Lbl>
            </div>
        )
    }
)

export default Checkbox;
