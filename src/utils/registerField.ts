import { FieldValues, UseFormRegister } from "react-hook-form";
import { FieldTypes } from "../interfaces/fields.interface";
import validationsMapper from "./validatoinsMapper";
import { RegisteredField } from "../interfaces/registered.interface";

const registerField = (
    fieldConfig: FieldTypes,
    register: UseFormRegister<FieldValues>,
) => {
    const { id, name, ...restFieldProps } = fieldConfig;

    const validations = restFieldProps?.validations || {}

    if (restFieldProps.disabled) {
        validations.disabled = restFieldProps.disabled
    }

    const registeredData = register(name, validationsMapper(validations));

    const mappedField = {
        ...registeredData,
        ...restFieldProps,
        id: id || registeredData.name
    }

    const field: RegisteredField = mappedField;


    return field
}

export default registerField
