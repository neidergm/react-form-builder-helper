import { ComponentType, InputHTMLAttributes, forwardRef } from "react"
import classnames from "classnames"

type Props = {
    Element?: string | ComponentType,
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<unknown, Props>(
    ({
        Element = "input",
        ...props
    }, ref) => {
        const elementProps = {
            ...props,
            [typeof Element === "string" ? "ref" : "innerRef"]: ref
        }

        if (typeof Element === "string") {
            elementProps.className = classnames("form-control", elementProps.className);
        }

        return (
            <Element {...elementProps} />
        )
    }
)

export default Input