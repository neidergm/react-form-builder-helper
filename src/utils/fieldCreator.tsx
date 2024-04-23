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
import { Control } from "react-hook-form";
import RequestWrapper from "../components/RequestWrapper";
import ChildrenWrapper from "../components/ChildrenWrapper";
import { I_JsonObject } from "../interfaces/generic.interfaces";

const createFormField = (
    config: RegisteredField,
    as?: string | ComponentType,
    labelAs?: string | ComponentType,
    control?: Control
) => {
    const { label: lbl, tag, type, invalid, controlled, ...rest } = config;

    let label = lbl;
    let element: typeof as = as;
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
        inputProps.Element = element;
        element = Input;

        if (type === "radio") {
            child = <Radio {...inputProps as any} Label={labelAs} />
            element = WrapperFormGroup;
            inputProps = { invalid };
        } else if (type === "textarea") {
            inputProps.type = type;
            inputProps.Element = inputProps.Element || "textarea";
        } else {
            inputProps.type = type;
        }
    } else if (tag === "checkbox") {
        child = <Checkbox {...inputProps as any} Label={labelAs} Element={element} type={type}>{label}</Checkbox>;
        if (type === "simple") label = undefined;
        element = WrapperFormGroup;
        inputProps = { invalid };
    } else if (tag === "select") {
        inputProps.Element = element;
        element = Select as unknown as ComponentType;

        if (type === "multiple") {
            inputProps.multiple = true
        }
        inputProps.type = "select";
    } else if (tag === "file") {
        inputProps.Element = element;
        element = FilePicker;

        if (type === "multiple") {
            inputProps.multiple = true
        }
    } else if (tag === "date") {
        inputProps.type = type;
        inputProps.Element = element;
        element = DatePicker;
    } else if (tag === "time") {
        inputProps.Element = element;
        element = TimePicker;
    } else if (tag === "custom") {
        inputProps.Element = type;
        child = <Custom {...inputProps} />
        element = WrapperFormGroup;
        inputProps = { invalid };
    } else if (tag === "HTML") {
        delete inputProps.invalid;
        element = type;
        inputProps = { ...inputProps.componentProps || {}, dangerouslySetInnerHTML: { __html: inputProps.value } };
    } else {
        element = WrapperFormGroup;
        label = `Not supported field for "${label}"`
        inputProps.className = "text-warning"
        inputProps.ref = null;
        child = <b>{tag} ({type})</b>
    }

    if (config.request) {
        inputProps.Child = element;
        element = RequestWrapper;
    }

    if (config.dependsOn) {
        inputProps.controlled = controlled;
        inputProps.ChildComponent = element;
        inputProps.control = control;
        element = ChildrenWrapper;
    }

    return <>
        {label && <Label htmlFor={inputProps.id} Element={labelAs}>
            {label} {config.validations?.required && <span className="text-danger">*</span>}
        </Label>}
        {createElement(element, inputProps as Attributes, child)}
    </>
}

export default createFormField;
