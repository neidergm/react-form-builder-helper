import { DependsOnWatcherResult, FieldTypes } from "./fields.interface";

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
    // validations: {[K in keyof RegisterOptions]: ValidationValueMessage},
};
