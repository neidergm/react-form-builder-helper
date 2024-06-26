import { Attributes, ComponentType, createElement } from "react";
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

type InputProps = I_JsonObject & { Element?: ComponentType | string, invalid?: boolean };

const createFormField = (
    config: RegisteredField,
    as?: string | ComponentType,
    labelAs?: string | ComponentType,
): JSX.Element => {
    const { label: lbl, tag, type, invalid, parentValue, ...rest } = config;
    let label = lbl;
    let mainElement: typeof as = as;
    let child;
    // let inputProps: InputProps = { invalid, ...rest }
    let inputProps: InputProps = { ...rest }

    if (typeof as !== "string") {
        inputProps.invalid = invalid;
    }

    if (!as) {
        inputProps.className = classnames(config.className as string, { 'is-invalid': invalid });
    }

    delete inputProps.validations;

    switch (tag) {
        case "input": {
            const _inputProps = { Element: mainElement, invalid, ...rest, Label: labelAs };

            // inputProps.Element = mainElement;
            mainElement = Input;

            if (type === "radio") {
                child = <Radio {..._inputProps} />;
                mainElement = WrapperFormGroup;
                inputProps = { invalid };
            } else if (type === "textarea") {
                inputProps.type = type;
                inputProps.Element = inputProps.Element || "textarea";
            } else {
                inputProps.type = type;
            }
            break;
        }
        case "checkbox":
            child = <Checkbox {...inputProps} Label={labelAs} Element={mainElement} type={type}>{label}</Checkbox>;
            if (type === "simple") label = undefined;
            mainElement = WrapperFormGroup;
            inputProps = { invalid };
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
                        (config.validations?.min as I_JsonObject)?.value,
                        (config.validations?.max as I_JsonObject)?.value
                    )
                }, as, labelAs);
            }
            inputProps.Element = mainElement;
            mainElement = TimePicker;
            break;

        case "custom":
            inputProps.Element = type as ComponentType;
            mainElement = Custom;
            inputProps.invalid = invalid;
            break;

        default:
            if (tag === "HTML") {
                delete inputProps.invalid;
                mainElement = type as ComponentType;
                inputProps = {
                    className: inputProps.className,
                    dangerouslySetInnerHTML: { __html: inputProps.value as string }
                };
            } else {
                mainElement = WrapperFormGroup;
                label = `Not supported field for "${label}"`;
                inputProps.className = "text-warning";
                inputProps.ref = null;
                child = <b>{tag} ({type})</b>;
            }
            break;
    }

    if (config.request) {
        inputProps.parentValue = parentValue;
        inputProps.Child = mainElement;
        mainElement = RequestWrapper;
    }

    return <>
        {label && <Label htmlFor={inputProps.id} Element={labelAs}>
            {label} {(config.validations?.required as ValidationValueMessage)?.value && <span className="text-danger">*</span>}
        </Label>}
        {createElement(mainElement, inputProps as Attributes, child)}
    </>
}

export default createFormField;
