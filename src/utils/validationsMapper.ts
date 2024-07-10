import { ValidationValueMessage } from "react-hook-form";
import { FieldTypes } from "../interfaces/fields.interface";
import { I_JsonObject } from "../interfaces/generic.interfaces";
import { RegisteredField } from "../interfaces/registered.interface";
import { validationsForFiles } from "./filePickerUtilities";
import { minOrMaxDateSetter } from "./TimeAndDateUtilities";

const validationsByRule: I_JsonObject = {
    "min": "Mínimo ${value}",
    "max": "Máximo ${value}",
    "minLength": "Mínimo ${value} caracteres",
    "maxLength": "Máximo ${value} caracteres",
    "required": "Campo obligatorio",
    "maxFileSize": "Máximo ${value}MB por archivo",
    "minFileSize": "Mínimo ${value}MB por archivo",
    "accept": "Debe ser formato ${value}"
}

const validationsMapper = (
    vals: FieldTypes["validations"],
    typeAndTag: {
        type: FieldTypes["type"],
        tag: FieldTypes["tag"]
    }
) => {

    const validations: RegisteredField["validations"] = {}
    // type validationsListObj = NonNullable<RegisteredField["validations"]>
    // const validations: {[K in validationsListObj]:ValidationValueMessage = {}}

    if (!vals) return validations;

    const originalValidations = { ...vals }

    if (typeAndTag?.tag === "date") {
        if (originalValidations.min) { originalValidations.min = minOrMaxDateSetter(originalValidations.min) as unknown as string }
        if (originalValidations.max) { originalValidations.max = minOrMaxDateSetter(originalValidations.max) as unknown as string }
    } else if (typeAndTag?.type === "email" && !originalValidations.pattern) {
        // eslint-disable-next-line no-useless-escape
        originalValidations.pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    } else if (typeAndTag?.type === "tel" && !originalValidations.pattern) {
        // eslint-disable-next-line no-useless-escape
        originalValidations.pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    } else if (typeAndTag?.type === "url" && !originalValidations.pattern) {
        // eslint-disable-next-line no-useless-escape
        originalValidations.pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*(\?[^#\s]*)?(\#[\w\-]*)?$/i;
    }

    for (const k in originalValidations) {

        const key = k as keyof typeof originalValidations;

        if (["onChange", "onBlur", "deps", "validate", "valueAsNumber", "setValueAs", "disabled", "shouldUnregister", "value", "ref"].includes(key)) continue;

        let valObject = originalValidations[key];

        // let { value, message } = (typeof valObject === "object") ? valObject : { value: valObject, message: undefined };
        try {
            if (!("value" in valObject)) throw new Error();
        } catch (_) {
            valObject = { value: valObject, message: undefined }
        }

        // eslint-disable-next-line prefer-const
        let { value, message } = valObject;

        if (!message) {
            if (key === 'required' && value) {
                message = validationsByRule[key]
            } else {
                message = validationsByRule[key] || "Ingrese un valor correcto"
            }
        }

        message = message.replace(/\$\{value\}/g, value)
        validations[key as keyof typeof originalValidations] = { value, message };
    }

    if (typeAndTag?.tag === "file") {
        validations.validate = (val, formValues) => {
            const r = validationsForFiles(val, validations);
            if ("validate" in originalValidations && r === true) {
                // eslint-disable-next-line @typescript-eslint/ban-types
                return (originalValidations.validate as Function)(val, formValues)
            }
            return r;
        }
    }

    if (typeAndTag?.tag === "checkbox" && typeAndTag.type === "multiple") {
        const originalValidateFunction = originalValidations.validate;
        let newValidateFunction = originalValidateFunction;

        if ("min" in validations) {
            const minValidation = (validations.min as ValidationValueMessage);
            newValidateFunction = (val, formValues) => {
                console.log(val)
                if (val?.length) {
                    if (val.length < minValidation.value) return minValidation.message;
                    if (originalValidateFunction) {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return (originalValidateFunction as Function)(val, formValues);
                    }
                }
                return true;
            };
        }

        if ("max" in validations) {
            const maxValidation = (validations.max as ValidationValueMessage);
            const previousValidateFunction = newValidateFunction;
            newValidateFunction = (val, formValues) => {
                if ( val?.length) {
                    if (val.length > maxValidation.value) return maxValidation.message;
                    // eslint-disable-next-line @typescript-eslint/ban-types
                    return (previousValidateFunction as Function)(val, formValues);
                }
                return true;
            };
        }

        validations.validate = newValidateFunction;
    }



    return validations;
}

export default validationsMapper;
