/* eslint-disable @typescript-eslint/no-explicit-any */
// import classnames from "classnames";
import { ComponentType, forwardRef } from "react";
import { CustomConfig } from "../interfaces/fields.interface";

type Props = {
    Element: string | ComponentType,
    componentProps: CustomConfig["componentProps"],
    // invalid?: boolean,
    [x: string]: any
}

const Custom = forwardRef<unknown, Props>(
    ({
        Element,
        componentProps,
        ...props
    }, ref) => {

        const initProps = { ...props, ref }

        const innerProps = typeof componentProps === "function" ? componentProps(initProps as any) : { ...componentProps, ...initProps };

        const elementProps = innerProps;

        return <Element {...elementProps} />
    }
)

export default Custom;
