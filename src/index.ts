import FieldPrinter from "./FieldPrinter";

// INTERFACES AND TYPES
export type { FieldTypes } from "./interfaces/fields.interface"
export type { HtmlConfig } from "./interfaces/fields.interface"

// UTILITIES
export { getFieldDefaultValues } from "./utils/getFieldDefaultValues";
export { normalizeFieldConfig } from "./utils/normalizeFieldConfig";

// COMPONENTS
export { DynamicFormBuilder } from "./DynamicFormBuilder";

const Field = FieldPrinter;

export default Field;



