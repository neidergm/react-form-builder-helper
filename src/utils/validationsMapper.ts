import { FieldTypes } from "../interfaces/fields.interface";
import { I_JsonObject } from "../interfaces/generic.interfaces";
import { minOrMaxDateSetter } from "./TimeAndDateUtilities";

const validationsByRule: I_JsonObject = {
    "min": "Mínimo ${value}",
    "max": "Máximo ${value}",
    "minLength": "Mínimo ${value} caracteres",
    "maxLength": "Máximo ${value} caracteres",
    "required": "Campo obligatorio"
}

const validationsMapper = (validations: FieldTypes["validations"], typeAndTag: { type: FieldTypes["type"], tag: FieldTypes["tag"] }) => {

    if (!validations) return {};

    if (typeAndTag?.tag === "date") {
        if (validations.min) { validations.min = minOrMaxDateSetter(validations.min) as unknown as string }
        if (validations.max) { validations.max = minOrMaxDateSetter(validations.max) as unknown as string }
    } else if (typeAndTag?.type === "email" && !validations.pattern) {
        // eslint-disable-next-line no-useless-escape
        validations.pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    } else if (typeAndTag?.type === "tel" && !validations.pattern) {
        // eslint-disable-next-line no-useless-escape
        validations.pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    }

    for (const k in validations) {

        const key = k as keyof typeof validations;

        if (["onChange", "onBlur", "deps", "validate", "valueAsNumber", "setValueAs", "disabled", "shouldUnregister", "value", "ref"].includes(key)) continue;

        let valObject = validations[key];

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
        validations[key as keyof typeof validations] = { value, message };
    }

    return validations;
}

export default validationsMapper;