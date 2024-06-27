import { FieldTypes } from "./fields.interface";
import fieldWatcher from "../utils/fieldWatcher";

type registeredConfigField = {
    id: string,
    invalid?: boolean
};

type controlledConfigField = {
    value?: unknown,
};

export type RegisteredField = registeredConfigField & controlledConfigField & FieldTypes &
{
    parentValue?: ReturnType<typeof fieldWatcher>,
    // validations: {[K in keyof RegisterOptions]: ValidationValueMessage},
};
