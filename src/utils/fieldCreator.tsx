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
import { FieldOption } from "../interfaces/fields.interface";
import { I_JsonObject } from "../interfaces/generic.interfaces";
import { Control } from "react-hook-form";
import RequestWrapper from "../components/RequestWrapper";
import ChildrenWrapper from "../components/ChildrenWrapper";

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
            child = (config.options as FieldOption[]).map((o, i) => <Radio defaultValue={o.value} key={o.value}
                {...inputProps} id={`${config.id}-${i}`} Label={labelAs}
            >{o.label}</Radio>)

            element = WrapperFormGroup;
            inputProps = { invalid };
        } else if (type === "textarea") {
            inputProps.type = type;
            inputProps.Element = inputProps.Element || "textarea";
        } else {
            inputProps.type = type;
        }
    } else if (tag === "checkbox") {
        inputProps.Element = element
        element = WrapperFormGroup;

        if (type === "multiple") {
            child = (config.options as FieldOption[]).map((o, i) =>
                <Checkbox {...inputProps} key={o.value} Label={labelAs} defaultValue={o.value} id={`${inputProps.id}-${i}`}>{o.label}</Checkbox>
            )
        } else {
            child = <Checkbox {...inputProps} Label={labelAs}>{label}</Checkbox>;
            label = undefined;
        }

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
        inputProps.controlled = controlled;
        inputProps.Child = element;
        element = RequestWrapper;
    }

    if (config.dependsOn) {
        inputProps.ChildComponent = element;
        inputProps.control = control;
        element = ChildrenWrapper;
    }

    return <>
        {label && <Label Element={labelAs}>{label}</Label>}
        {createElement(element, inputProps as Attributes, child)}
    </>
}

export default createFormField;
