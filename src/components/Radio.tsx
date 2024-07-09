import { ComponentType, InputHTMLAttributes, forwardRef } from "react"
import { default as Lbl } from "./Label"
import classnames from 'classnames'
import { RadioConfig } from "../interfaces/fields.interface"
import mapOptions from "../utils/fieldOptionsMapper"
import { INVALID_CLASSNAME, RADIO_BUTTON_CLASSNAME, RADIO_BUTTON_INLINE_CLASSNAME, RADIO_BUTTON_LABEL_CLASSNAME, RADIO_BUTTON_WRAPPER_CLASSNAME } from "../classNames"

type Props = RadioConfig & {
    Label?: string | ComponentType,
    Element?: ComponentType<InputHTMLAttributes<HTMLInputElement>> | string,
    invalid?: boolean,
    placeholder?: string
}

const Radio = forwardRef<unknown, Props>(
    ({
        Element = "input",
        Label,
        options,
        id,
        inline,
        invalid,
        placeholder,
        ...props
    }, ref) => {
        const elementProps = {
            ...props,
            type: "radio",
            [typeof Element === "string" ? "ref" : "innerRef"]: ref
        }
        elementProps.className = classnames(RADIO_BUTTON_CLASSNAME, elementProps.className);

        if (!options) {
            if (!placeholder) return <></>
            options = [{ label: placeholder, value: "" }]
            elementProps.disabled = true;
        }
        return (<div className={classnames({ [INVALID_CLASSNAME]: invalid })}>
            {
                mapOptions(options, (label, value, index) =>
                    <div className={classnames(RADIO_BUTTON_WRAPPER_CLASSNAME, { [RADIO_BUTTON_INLINE_CLASSNAME]: inline })} key={value}>
                        <Element {...elementProps} value={value} id={`${id}-${index}`} />
                        <Lbl Element={Label} htmlFor={`${id}-${index}`} className={RADIO_BUTTON_LABEL_CLASSNAME}>{label}</Lbl>
                    </div>
                )
            }
        </div>
        )
    }
)
export default Radio
