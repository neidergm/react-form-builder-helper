import { ComponentType, forwardRef } from "react";
import { CustomConfig } from "../interfaces/fields.interface";

type Props = {
    Element: string | ComponentType,
    componentProps: CustomConfig["componentProps"],
    [x: string]: unknown
}

const Custom = forwardRef<unknown, Props>(
    ({
        Element,
        componentProps,
        ...props
    }, ref) => {

        const initProps = { ...props, ref }

        const innerProps = typeof componentProps === "function" ? componentProps(initProps) : { ...componentProps, ...initProps };

        const elementProps = innerProps;

        if(!Element) return <div className={elementProps.className}><b>Error:</b> Element property is required in Custom Input</div>

        return <Element {...elementProps} />
    }
)

export default Custom;
