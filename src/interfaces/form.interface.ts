import { DefaultValues, FieldValues, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { FieldTypes } from "./fields.interface";

export type OnSubmit = SubmitHandler<FieldValues>
export type OnSubmitError = SubmitErrorHandler<FieldValues>

export interface FormProps {
    id?: string,
    fields: Array<FieldTypes>;
    onSubmit: OnSubmit;
    onInvalidSubmit?: OnSubmit;
    /**
     * JSON object with default values or async function that returns default values
     */
    defaultValues?: DefaultValues<FieldValues>;
    saveTemporalData?: (data: FieldValues) => void
}