import { UseFormRegisterReturn } from "react-hook-form";
import { FieldTypes } from "./fields.interface";
import fieldWatcher from "../utils/fieldWatcher";

type registeredConfigField = FieldTypes & UseFormRegisterReturn & {
    id: string,
    invalid?: boolean
};

type controlledConfigField = FieldTypes & UseFormRegisterReturn & {
    value?: unknown ,
    componentProps?: object
};

export type RegisteredField = registeredConfigField & controlledConfigField & {parentValue?: ReturnType<typeof fieldWatcher>};
