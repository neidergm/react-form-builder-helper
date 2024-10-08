import { ChangeEventHandler, ComponentType, FocusEventHandler } from "react";
import { RegisterOptions, ValidationRule } from "react-hook-form";
import { I_JsonObject } from "./generic.interfaces";

export type FieldTypes = (
    SelectConfig |
    InputConfig |
    CheckboxConfig |
    RadioConfig |
    DateConfig |
    TimeConfig |
    FileConfig |
    CustomConfig |
    ListConfig
    // HtmlConfig
) & {
    controlled?: boolean
} & Partial<WithRequestConfig>
    & Partial<WithDepends>

export type FieldOption = { value: string | number | boolean, label: string | number | boolean };

export interface FieldCommonConfig {
    name: string;
    label?: string | JSX.Element;
    placeholder?: string;
    disabled?: boolean;

    /**
     * Depends of input type
     */
    defaultValue?: unknown;

    /**
     * By default is same of "name"
     */
    id?: string;

    /**
     * Class for input element
     */
    className?: string;

    /**
     * Class for input wrapper element
     */
    wrapperClassName?: string;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;

    // style?: { [x: string]: string };
    // help?: string;
}


/********************************************************************\
| INPUT
\********************************************************************/

type InputTypes = "text" | "email" | "number" | "textarea" | "password" | "url" | "search" | "color" | "range" | "hidden" | "tel";

export interface InputConfig extends FieldCommonConfig {
    tag: "input";
    type: InputTypes;
    validations?: RegisterOptions
}


/********************************************************************\
| SELECT
\********************************************************************/

export interface SelectConfig extends FieldCommonConfig {
    tag: "select";
    type: "simple" | "multiple";
    defaultValue?: string | Array<string>;
    validations?: RegisterOptions;
    options: Array<FieldOption | string> | null;
}

/********************************************************************\
| CHECKBOX
\********************************************************************/

export interface CheckboxConfig extends Omit<FieldCommonConfig, "placeholder"> {
    tag: "checkbox";
    type: "simple" | "multiple";
    defaultValue?: boolean | Array<string | boolean | number>;
    validations?: RegisterOptions;
    inline?: boolean;
    options?: Array<FieldOption | string> | null;
}

// interface SimpleCheckbox {
//     type: "simple",
//     options?: never
// }
// interface MultipleCheckbox {
//     type: "simple",
//     options: Array<FieldOption | string> | null;
// }

// interface BaseCheckbox extends Omit<FieldCommonConfig, "placeholder"> {
//     tag: "checkbox";
//     // type: "simple" | "multiple";
//     defaultValue?: boolean | Array<string | boolean | number>;
//     validations?: RegisterOptions;
// }

// export type CheckboxConfig = BaseCheckbox & (SimpleCheckbox | MultipleCheckbox);


/********************************************************************\
| RADIO
\********************************************************************/

export interface RadioConfig extends FieldCommonConfig {
    tag: "input";
    type: "radio";
    options: Array<FieldOption | string> | null;
    defaultValue?: string;
    inline?: boolean;
    validations?: RegisterOptions;
}

/********************************************************************\
| FILE
\********************************************************************/

export interface FileConfig extends FieldCommonConfig {
    tag: "file";
    type: "simple" | "multiple";
    defaultValue?: string;
    validations?: RegisterOptions & {
        "maxFileSize"?: ValidationRule<number>,
        "minFileSize"?: ValidationRule<number>,
        "accept"?: ValidationRule<string>,
    };
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
// type ReturnProps = ControllerRenderProps<FieldValues, string> & { ref: ForwardedRef<unknown> }
// type ReturnProps = Pick<CustomConfig, "name" | "id" | "className" | "onBlur" | "onChange" | "componentProps">
type CustomFieldReturnProps = Omit<CustomConfig, "Element" | "tag" | "type" | "validations" | "componentProps" | "wrapperClassName">
    & { invalid: boolean }

export type CustomFieldComponentProps<T extends Record<string, unknown>> = T | (
    (renderProps: T & CustomFieldReturnProps & I_JsonObject) => T
)

export interface CustomConfig extends FieldCommonConfig {
    tag: "custom";
    type: string;
    Element: ComponentType,
    defaultValue?: string;
    validations?: RegisterOptions;
    componentProps?: CustomFieldComponentProps<
        React.ComponentProps<CustomConfig["Element"]>
    >
}


/********************************************************************\
| LIST
\********************************************************************/

export interface ListConfig extends Omit<FieldCommonConfig, "placeholder"> {
    tag: "list";
    type: "group" | "table";
    /**
     * For every group of fields
     */
    className?: string;
    defaultValue?: Array<unknown>;
    validations?: RegisterOptions;
    fields: Array<FieldTypes>;
}



/********************************************************************\
| HTML
\********************************************************************/

export interface HtmlConfig extends Pick<FieldCommonConfig, "className" | "label" | "name" | "wrapperClassName"> {
    type: string;
    tag: "HTML";
    value: unknown;
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
        params?: RequestParams;
        mapOptions?: { label: string, value: string }
        /**
         * Other values to map params
         */
        otherValuesToMap?: I_JsonObject,
    },
    // doRequest?: (url: string, method: RequestMethod, params?: RequestParams) => Promise<unknown>
    doRequest: (url: string, method: RequestMethod, params?: RequestParams) => Promise<Partial<FieldTypes & { options: unknown[] }>>,
    // loadingText?: string,
}

/********************************************************************\
| WITH CHILDREN
\********************************************************************/

type WhenValueTypes = string | number | boolean | "*";
export type DependsOnWatcherResult<T = I_JsonObject> = {
    show: boolean,
    parentValue: I_JsonObject,
    props?: T
}


type DependsOnItem = {
    name: string,
    whenValue?: WhenValueTypes | Array<WhenValueTypes>,
    show?: boolean,
    props?: I_JsonObject
    // showWhenValue: ,
    // hideWhenValue?: string | number | boolean
}

export interface WithDepends {
    dependsOn: string | DependsOnItem[];
    dependsOnChange?: (data: DependsOnWatcherResult) => Partial<FieldTypes> | undefined
}

