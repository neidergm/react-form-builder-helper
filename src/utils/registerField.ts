import { FieldValues, UseFormRegister } from "react-hook-form";
import { FieldOption, FieldTypes } from "../interfaces/fields.interface";
import validationsMapper from "./validatoinsMapper";
import { RegisteredField } from "../interfaces/registered.interface";

const mapOptions = (options: Array<FieldOption | string>) => options.map(o => typeof o === "string" ? { value: o, label: o } : o)

const registerField = (
    fieldConfig: FieldTypes,
    register: UseFormRegister<FieldValues>,
) => {
    const { id, name, ...restFieldProps } = fieldConfig;

    const registeredData = register(name, validationsMapper(restFieldProps?.validations || {}));

    if (restFieldProps.tag === "select") {
        // if (restFieldProps.options) {
        //     restFieldProps.options = mapOptions(restFieldProps.options);
        //     restFieldProps.options.unshift({ label: restFieldProps.placeholder || "Seleccione...", value: "" })
        // }
    } else if (restFieldProps.tag === "input" && restFieldProps.type === "radio") {
        restFieldProps.options = mapOptions(restFieldProps.options || []);
    } else if (restFieldProps.tag === "checkbox" && restFieldProps.options) {
        restFieldProps.options = mapOptions(restFieldProps.options || []);
    }

    const mappedField = {
        ...registeredData,
        ...restFieldProps,
        id: id || registeredData.name
    }

    const field: RegisteredField = mappedField;


    return field
}

export default registerField
