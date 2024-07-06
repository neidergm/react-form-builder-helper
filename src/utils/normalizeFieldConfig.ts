import { FieldTypes } from "../interfaces/fields.interface";

type InferredRelation<T, F extends FieldTypes = FieldTypes> = {
    [K in keyof F]?: keyof T;
};

export const normalizeFieldConfig = <T extends { [key: string]: unknown }>(
    fields: T[],
    relation: InferredRelation<T>
) => {
    return fields.map(field => {
        const normalizedField = { ...field } as T;

        (Object.entries(relation) as [keyof FieldTypes, keyof T][]).forEach(([key, oldKey]) => {
            if (oldKey in field) {
                (normalizedField as any)[key] = field[oldKey];
                delete normalizedField[oldKey];
            }
        });

        return normalizedField;
    });
};
