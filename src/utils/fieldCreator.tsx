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
    Custom,
    FieldList
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
    multiple?: boolean
};

const createFormField = (
    config: RegisteredField,
    as?: string | ComponentType,
    labelAs?: string | ComponentType,
): JSX.Element => {
    const { label: lbl, tag, type, invalid, validations, ...rest } = config;
    let label = lbl;
    let mainElement = as;

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
                mainElement = Radio as ComponentType<unknown>;
                (inputProps as ComponentProps<typeof Radio>).Label = labelAs;
                inputProps.invalid = invalid;
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
            mainElement = Custom as ComponentType<unknown>;
            inputProps.invalid = invalid;
            break;

        case "list":
            mainElement = FieldList as ComponentType<unknown>;
            inputProps.invalid = invalid;
            (inputProps as ComponentProps<typeof FieldList>).min = (validations?.min || (validations?.required ? 1 : 0)) as number;
            (inputProps as ComponentProps<typeof FieldList>).max = validations?.max as number;
            break;

        default:
            if (tag === "HTML") {
                delete inputProps.invalid;
                mainElement = type;
                mainElementProps = {
                    className: inputProps.className,
                    dangerouslySetInnerHTML: { __html: inputProps.value }
                };
            } else {
                mainElement = WrapperFormGroup;
                label = `<p>Not supported field <b>${tag} (${type})</b> for "${label}"</p>`;
                inputProps.className = "text-warning";
            }
            break;
    }

    if (config.request) {
        (inputProps as ComponentProps<typeof RequestWrapper>).Child = mainElement;
        mainElement = RequestWrapper;
    }

    if (!mainElementProps) mainElementProps = inputProps

    return <>
        <Label htmlFor={inputProps.id} Element={labelAs} className={FORM_LABEL_CLASSNAME} isRequired={!!(validations?.required as ValidationValueMessage)?.value}>
            {label}
        </Label>
        {createElement(mainElement, mainElementProps)}
    </>
}

export default createFormField;
