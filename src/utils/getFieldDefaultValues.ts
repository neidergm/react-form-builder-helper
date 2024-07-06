import { FieldTypes } from "../interfaces/fields.interface"

export const getFieldDefaultValues = (fields: FieldTypes[]) => {
    return fields.reduce((p, c) => "defaultValue" in c ? ({ ...p, [c.name]: c.defaultValue }) : p, {})
}