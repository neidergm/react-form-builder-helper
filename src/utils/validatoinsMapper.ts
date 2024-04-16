import { RegisterOptions } from "react-hook-form";

const validationsMapper = (validations: RegisterOptions) => {

    for (const key in validations) {

        const value = validations[key as keyof typeof validations];
        let message = "";

        if (typeof value === "object") continue

        if (key === 'required' && value) {
            message = `Campo requerido`
        } else if (key === "min") {
            message = `Mínimo ${value}`
        } else if (key === "max") {
            message = `Máximo ${value}`
        } else if (key === "minLength") {
            message = `Mínimo ${value} caracteres`
        } else if (key === "maxLength") {
            message = `Máximo ${value} caracteres`
        }

        validations[key as keyof typeof validations] = { value, message }
    }

    return validations;
}

export default validationsMapper;