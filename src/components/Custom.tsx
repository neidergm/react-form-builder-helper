import { ComponentType, forwardRef } from "react";
import { CustomConfig } from "../interfaces/fields.interface";
import classnames from 'classnames';

type Props = {
    Element: string | ComponentType
    invalid: boolean,
} & Omit<CustomConfig, "wrapperClassName" | "validations" | "tag" | "type">

const Custom = forwardRef<unknown, Props>(
    ({
        Element,
        componentProps,
        ...props
    }, ref) => {

        const initProps = { ...props, ref }

        const elementProps = (typeof componentProps === "function" ? componentProps(initProps) : componentProps) || {};

        if (!Element) return <div className={`${props.className || ""}`}><b>Error:</b> Element property is required in Custom Input</div>

        if (!elementProps.ref) elementProps.ref = ref;

        return <Element
            {...elementProps} {...initProps}
            className={classnames(props.className, elementProps.className)}
        />
    }
)

export default Custom;
