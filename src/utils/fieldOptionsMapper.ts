import { FieldOption } from "../interfaces/fields.interface";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapOptions = (options: Array<FieldOption | string>, callback: (label: any, value: any, index: number) => JSX.Element) =>
    options.map((o, i) => {
        const { label, value } = typeof o === "string" ? { value: o, label: o } : o;
        return callback(label, value, i)
    })

export default mapOptions;