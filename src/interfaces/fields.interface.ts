import { ComponentType } from "react";
import { ControllerRenderProps, FieldValues, RegisterOptions } from "react-hook-form";

export type FieldTypes = (
    SelectConfig |
    InputConfig |
    CheckboxConfig |
    RadioConfig |
    DateConfig |
    TimeConfig |
    FileConfig |
    CustomConfig |
    HtmlConfig
) & {
    controlled?: boolean
} & Partial<WithRequestConfig>
    & Partial<WithChildren>

export type FieldOption = { value: string, label: string };

export interface FieldCommonConfig {

    label?: string | JSX.Element;
    className?: string,

    name: string;
    id?: string;
    placeholder?: string;
    defaultValue?: any;
    value?: any;
    // invalid?: boolean;
    disabled?: boolean;
    // /**
    //  * classNames for input field
    //  */
    // className?: string;
    // /**
    //  * classNames for the input and label (it's item in a form) wrapper
    //  */
    wrapperClassName?: string;
    // style?: { [x: string]: string };

    // key?: string | number;
    // /**
    //  * Show loading message
    //  */
    // loading?: boolean;
    // /**
    // * Show icon for help with tooltip
    // */
    // help?: string;
}


/********************************************************************\
| INPUT
\********************************************************************/

type InputTypes = "text" | "email" | "number" | "textarea" | "password" | "url" | "search" | "color" | "range" | "hidden" | "tel";

export interface InputConfig extends FieldCommonConfig {
    tag: "input";
    type: InputTypes;
    defaultValue?: string;

    validations?: RegisterOptions
}


/********************************************************************\
| SELECT
\********************************************************************/

export interface SelectConfig extends FieldCommonConfig {
    tag: "select";
    type: "simple" | "multiple";
    defaultValue?: string;
    validations?: RegisterOptions;
    options: Array<FieldOption | string> | null;
}

/********************************************************************\
| CHECKBOX
\********************************************************************/

export interface CheckboxConfig extends FieldCommonConfig {
    tag: "checkbox";
    type: "simple" | "multiple";
    defaultValue?: string;
    validations?: RegisterOptions;
    options?: Array<FieldOption | string> | null;
}

/********************************************************************\
| RADIO
\********************************************************************/

export interface RadioConfig extends FieldCommonConfig {
    tag: "input";
    type: "radio";
    defaultValue?: string;
    validations?: RegisterOptions;
    options: Array<FieldOption | string> | null;
}

/********************************************************************\
| FILE
\********************************************************************/

export interface FileConfig extends FieldCommonConfig {
    tag: "file";
    type: "simple" | "multiple";
    defaultValue?: string;
    validations?: RegisterOptions;
}

/********************************************************************\
| DATE
\********************************************************************/

export interface DateConfig extends FieldCommonConfig {
    tag: "date";
    type: "date" | "month";
    defaultValue?: string;
    validations?: RegisterOptions;
}

/********************************************************************\
| TIME
\********************************************************************/

export interface TimeConfig extends FieldCommonConfig {
    tag: "time";
    type: "simple" | "select";
    defaultValue?: string;
    validations?: RegisterOptions;
}

/********************************************************************\
| CUSTOM
\********************************************************************/

type ReturnProps = ControllerRenderProps<FieldValues, string>

export type CustomFieldComponentProps<T = object> = T & FieldCommonConfig | ((renderProps: ReturnProps & FieldCommonConfig) => T);

export interface CustomConfig extends FieldCommonConfig {
    tag: "custom";
    type: ComponentType;
    defaultValue?: string;
    validations?: RegisterOptions;
    componentProps: CustomFieldComponentProps
}

/********************************************************************\
| HTML
\********************************************************************/

export interface HtmlConfig extends Pick<FieldCommonConfig, "className" | "label" | "name" | "wrapperClassName"> {
    type: string;
    tag: "HTML";
    value: string;
    wrapperClassName?: string;
    // validations?: RegisterOptions
}


/********************************************************************\
| REQUEST
\********************************************************************/

type RequestMethod = "GET" | "POST" | "post" | "get"
type RequestParams = { [key: string]: number | boolean | string } | string
export interface WithRequestConfig {
    // loading?: boolean,
    request: {
        method: RequestMethod,
        url: string,
        /**
         * When is string the param is concatenated to de URL.
         * @param {string} as "{key1}/{key2}/{keyN}"
         */
        params?: RequestParams ;
    },
    doRequest?: (url: string, method: RequestMethod, params?: RequestParams) => Promise<any>
}

/********************************************************************\
| WITH CHILDREN
\********************************************************************/

export interface WithChildren {
    dependsOn: string;
}

