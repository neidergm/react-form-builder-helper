import { ComponentProps, ComponentType, createElement } from "react";
import classnames from 'classnames'
import {
    Radio,
    Checkbox,
    WrapperFormGroup,
    Label,
    Input,
    Select,
    FilePicker,
    DatePicker,
    TimePicker,
    Custom
} from "./../components"
import { RegisteredField } from "../interfaces/registered.interface";
import RequestWrapper from "../components/RequestWrapper";
import { ValidationValueMessage } from "react-hook-form";
import { I_JsonObject } from "../interfaces/generic.interfaces";
import { timeGenerator } from "./TimeAndDateUtilities";
import { FORM_LABEL_CLASSNAME, INVALID_CLASSNAME } from "../classNames";

type InputCustomProps = {
    Element?: ComponentType | string,
    invalid?: boolean,
    type?: string,
    Child?: ComponentType | string,
    // parentValue?: I_JsonObject,
    multiple?: boolean
};

const createFormField = (
    config: RegisteredField,
    as?: string | ComponentType,
    labelAs?: string | ComponentType,
): JSX.Element => {
    // const { label: lbl, tag, type, invalid, parentValue, validations, ...rest } = config;
    const { label: lbl, tag, type, invalid, validations, ...rest } = config;
    let label = lbl;
    let mainElement = as;
    let child;

    let mainElementProps: I_JsonObject | undefined = undefined;

    const inputProps: typeof rest & InputCustomProps = {
        ...rest,
        className: classnames(config.className, { [INVALID_CLASSNAME]: invalid })
    }

    if (!!as && typeof as !== "string") { inputProps.invalid = invalid }

    switch (tag) {
        case "input":
            inputProps.Element = mainElement;
            mainElement = Input;

            if (type === "radio") {
                child = <Radio {...inputProps} Label={labelAs} />;
                mainElement = WrapperFormGroup;
                mainElementProps = { invalid };
            } else if (type === "textarea") {
                if (!inputProps.Element) inputProps.Element = "textarea"
            } else {
                inputProps.type = type;
            }
            break;

        case "checkbox":
            inputProps.Element = mainElement;
            mainElement = Checkbox as ComponentType<unknown>;
            (inputProps as ComponentProps<typeof Checkbox>).Label = labelAs;
            (inputProps as ComponentProps<typeof Checkbox>).label = label;
            inputProps.type = type;
            inputProps.invalid = invalid;
            if (type === "simple") label = undefined
            break;

        case "select":
            inputProps.Element = mainElement;
            mainElement = Select as ComponentType<unknown>;
            inputProps.multiple = type === "multiple";
            inputProps.type = "select";
            break;

        case "file":
            inputProps.Element = mainElement;
            mainElement = FilePicker;
            inputProps.multiple = type === "multiple";
            break;

        case "date":
            inputProps.type = type;
            inputProps.Element = mainElement;
            mainElement = DatePicker;
            break;

        case "time":
            if (type === "select") {
                return createFormField({
                    ...config, tag: "select", type: "simple",
                    options: timeGenerator(
                        (validations?.min as ValidationValueMessage<number | string>)?.value,
                        (validations?.max as ValidationValueMessage<number | string>)?.value
                    )
                }, as, labelAs);
            }
            inputProps.Element = mainElement;
            mainElement = TimePicker;
            break;

        case "custom":
            mainElement = Custom as unknown as ComponentType;
            inputProps.invalid = invalid;
            break;

        default:
            if (tag === "HTML") {
                delete inputProps.invalid;
                mainElement = type as string;
                mainElementProps = {
                    className: inputProps.className,
                    dangerouslySetInnerHTML: { __html: inputProps.value }
                };
            } else {
                mainElement = WrapperFormGroup;
                label = `Not supported field for "${label}"`;
                inputProps.className = "text-warning";
                child = <b>{tag} ({type})</b>;
            }
            break;
    }

    if (config.request) {
        // inputProps.parentValue = parentValue;
        inputProps.Child = mainElement;
        mainElement = RequestWrapper;
    }

    if (!mainElementProps) mainElementProps = inputProps

    return <>
        <Label htmlFor={inputProps.id} Element={labelAs} className={FORM_LABEL_CLASSNAME} isRequired={!!(validations?.required as ValidationValueMessage)?.value}>
            {label}
        </Label>
        {createElement(mainElement, mainElementProps, child)}
    </>
}

export default createFormField;
