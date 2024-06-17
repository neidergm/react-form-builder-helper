// import { UseFormRegisterReturn } from "react-hook-form";
import { FieldTypes } from "./fields.interface";
import fieldWatcher from "../utils/fieldWatcher";

type registeredConfigField = {
    id: string,
    invalid?: boolean
};

type controlledConfigField = {
    value?: unknown ,
    componentProps?: object
};

export type RegisteredField = registeredConfigField & controlledConfigField & FieldTypes &  {parentValue?: ReturnType<typeof fieldWatcher>};
