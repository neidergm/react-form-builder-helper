import { DependsOnWatcherResult, FieldTypes } from "./fields.interface";

type registeredConfigField = {
    id: string,
    invalid?: boolean
};

type controlledConfigField = {
    value?: unknown,
};

export type RegisteredField = registeredConfigField & controlledConfigField & FieldTypes &
{
    parentValue?: DependsOnWatcherResult["parentValue"],
    // validations: {[K in keyof RegisterOptions]: ValidationValueMessage},
};
