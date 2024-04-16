import { ComponentType, InputHTMLAttributes, forwardRef } from "react"
import { default as Lbl } from "./Label"
import classnames from 'classnames'

type Props = {
    invalid?: boolean,
    children: string,
    Label?: string | ComponentType,
    Element?: ComponentType | string,
} & InputHTMLAttributes<HTMLInputElement>

const Radio = forwardRef<unknown, Props>(
    ({
        Element = "input",
        Label,
        children,
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

        return (
            <div className="form-check">
                <Element {...elementProps} />
                <Lbl Element={Label} htmlFor={props.id} check>{children}</Lbl>
            </div>
        )
    }
)
export default Radio