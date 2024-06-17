/* eslint-disable @typescript-eslint/no-explicit-any */
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
// import { Control } from "react-hook-form";
import RequestWrapper from "../components/RequestWrapper";
import { ValidationValueMessage } from "react-hook-form";
import { I_JsonObject } from "../interfaces/generic.interfaces";

const createFormField = (
    config: RegisteredField,
    as?: string | ComponentType,
    labelAs?: string | ComponentType,
    // control?: Control
) => {
    const { label: lbl, tag, type, invalid, parentValue, ...rest } = config;

    let label = lbl;
    let mainElement: typeof as = as;
    let child;
    let inputProps: I_JsonObject & { Element?: typeof as } = {
        invalid,
        ...rest
    }

    if (!as) {
        inputProps.className = classnames(config.className as string, { 'is-invalid': invalid });
    }

    delete inputProps.validations;

    if (tag === "input") {
        inputProps.Element = mainElement;
        mainElement = Input;

        if (type === "radio") {
            child = <Radio {...inputProps as any} Label={labelAs} />
            mainElement = WrapperFormGroup;
            inputProps = { invalid };
        } else if (type === "textarea") {
            inputProps.type = type;
            inputProps.Element = inputProps.Element || "textarea";
        } else {
            inputProps.type = type;
        }
    } else if (tag === "checkbox") {
        child = <Checkbox {...inputProps as any} Label={labelAs} Element={mainElement} type={type}>{label}</Checkbox>;
        if (type === "simple") label = undefined;
        mainElement = WrapperFormGroup;
        inputProps = { invalid };
    } else if (tag === "select") {
        inputProps.Element = mainElement;
        mainElement = Select as unknown as ComponentType;

        if (type === "multiple") {
            inputProps.multiple = true
        }
        inputProps.type = "select";
    } else if (tag === "file") {
        inputProps.Element = mainElement;
        mainElement = FilePicker;

        if (type === "multiple") {
            inputProps.multiple = true
        }
    } else if (tag === "date") {
        inputProps.type = type;
        inputProps.Element = mainElement;
        mainElement = DatePicker;
    } else if (tag === "time") {
        inputProps.Element = mainElement;
        mainElement = TimePicker;
    } else if (tag === "custom") {
        // console.log(config)
        inputProps.Element = type;
        mainElement = Custom;
        inputProps.invalid = invalid;
        // inputProps.Element = type;
        // child = <Custom {...inputProps} />
        // mainElement = WrapperFormGroup;
        // inputProps.invalid = invalid;
    } else if (tag === "HTML") {
        delete inputProps.invalid;
        mainElement = type;
        inputProps = { ...inputProps.componentProps || {}, dangerouslySetInnerHTML: { __html: inputProps.value } };
    } else {
        mainElement = WrapperFormGroup;
        label = `Not supported field for "${label}"`
        inputProps.className = "text-warning"
        inputProps.ref = null;
        child = <b>{tag} ({type})</b>
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
