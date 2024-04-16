import { FieldValues, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { FieldTypes } from "./fields.interface";

export type OnSubmit = SubmitHandler<FieldValues>
export type OnSubmitError = SubmitErrorHandler<FieldValues>

export interface FormProps {
    id?: string,
    fields: Array<FieldTypes>;
    onSubmit: OnSubmit;
    onInvalidSubmit?: OnSubmit;
    defaultValues?: object;
}