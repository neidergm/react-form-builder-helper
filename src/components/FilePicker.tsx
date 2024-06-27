import { ComponentType, InputHTMLAttributes, forwardRef } from "react"
import classnames from "classnames"

type Props = {
    Element?: string | ComponentType,
} & InputHTMLAttributes<HTMLInputElement>

const FilePicker = forwardRef<unknown, Props>(
    ({
        Element = "input",
        ...props
    }, ref) => {
        const elementProps = {
            ...props,
            type: "file",
            [typeof Element === "string" ? "ref" : "innerRef"]: ref
        }

        if (typeof Element === "string") {
            elementProps.className = classnames("form-control", elementProps.className);
        }

        return (
            <>
                <Element {...elementProps} />
                {/* <select className="form-select">
                    <option>HOLA</option>
                    <option>HOLA1</option>
                    <option>HOLA2</option>
                </select> */}
            </>
        )
    }
)

export default FilePicker