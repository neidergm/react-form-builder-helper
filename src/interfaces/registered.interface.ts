import { DependsOnWatcherResult, FieldTypes } from "./fields.interface";
import { I_JsonObject } from "./generic.interfaces";

type registeredConfigField = {
    id: string,
    invalid?: boolean
};

type controlledConfigField = {
    value?: unknown,
};

export type RegisteredField<T = FieldTypes> = T & registeredConfigField & controlledConfigField &
{
    parentValue?: DependsOnWatcherResult["parentValue"],
    formValues?: I_JsonObject
    // validations: {[K in keyof RegisterOptions]: ValidationValueMessage},
};
