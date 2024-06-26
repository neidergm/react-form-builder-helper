import { FieldValues, UseFormRegister } from "react-hook-form";
import { FieldTypes } from "../interfaces/fields.interface";
import validationsMapper from "./validationsMapper";
import { RegisteredField } from "../interfaces/registered.interface";
import { I_JsonObject } from "../interfaces/generic.interfaces";

const registerField = (
    fieldConfig: FieldTypes,
    register: UseFormRegister<FieldValues>,
) => {
    const { id, name, onChange, onBlur, validations, ...restFieldProps } = fieldConfig;

    const vals = validationsMapper(validations, { type: restFieldProps.type, tag: restFieldProps.tag });

    if ("disabled" in restFieldProps) vals.disabled = restFieldProps.disabled
    if (onChange) vals.onChange = onChange;
    if (onBlur) vals.onBlur = onBlur;

    const registeredData = register(name, vals);

    const mappedField = {
        ...registeredData,
        ...restFieldProps,
        validations: vals,
        id: id || registeredData.name
    }

    if (mappedField.tag === "file" && vals && "accept" in vals) {
        (mappedField as I_JsonObject).accept = (vals["accept"] as I_JsonObject).value;
    }

    const field: RegisteredField = mappedField;

    return field
}

export default registerField
