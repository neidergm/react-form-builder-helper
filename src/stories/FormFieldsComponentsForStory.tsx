import {
    InputConfig,
    SelectConfig,
    WithRequestConfig,
    CheckboxConfig,
    RadioConfig,
    DateConfig,
    TimeConfig,
    CustomConfig,
    FileConfig,
    HtmlConfig,
    WithDepends,
    ListConfig,
} from '../interfaces/fields.interface';
import { useId, useState } from 'react';
import { DynamicFormBuilder, DynamicFormProps } from '../DynamicFormBuilder';
import { getSimpleStoryArgs } from './commonConfiguration';
import { getFieldDefaultValues } from '../utils/getFieldDefaultValues';


//SIMPLE FIELDS
export const InputComponent = (props: InputConfig) => <PrintOneField {...props} />
export const SelectComponent = (props: SelectConfig) => <PrintOneField {...props} />
export const CheckboxComponent = (props: CheckboxConfig) => <PrintOneField {...props} />
export const RadioComponent = (props: RadioConfig) => <PrintOneField {...props} />
export const DateComponent = (props: DateConfig) => <PrintOneField {...props} />
export const TimeComponent = (props: TimeConfig) => <PrintOneField {...props} />
export const CustomComponent = (props: CustomConfig) => <PrintOneField {...props} />
export const FileComponent = (props: FileConfig) => <PrintOneField {...props} />
export const HtmlComponent = (props: HtmlConfig) => <PrintOneField {...props} />
export const ListComponent = (props: ListConfig) => <PrintOneField {...props} />

export const DynamicFormComponent = (props: DynamicFormProps) => <PrintOneField {...props} />

export const CheckboxWithRequestComponent = (props: CheckboxConfig & WithRequestConfig) => <PrintOneField {...props} />
export const RadioWithRequestComponent = (props: RadioConfig & WithRequestConfig) => <PrintOneField {...props} />

export const SelectWithRequestComponent = (props: SelectConfig & WithRequestConfig) => <PrintOneField {...props} />
export const SelectWithRequestAndDependsComponent = (props: SelectConfig & WithRequestConfig & WithDepends) => {

    const parentField = {
        label: "Parent field",
        tag: "select",
        name: "parent",
        type: "simple",
        placeholder: "Pick one...",
        options: null,
        doRequest() {
            return new Promise((resolve) =>
                setTimeout(() => resolve({ options: ["1", "2", "3", "4", "5"] }), 2000)
            )
        },
        request: {
            url: "https://example.api/countries",
            method: "GET",
        },
        // defaultValue: "1",
        validations: {
            required: true
        },
    }

    const defaultValues = {
        parent: 1,
        [props.name]: props.defaultValue
    }

    return <>
        <p>
            Field config object contains both field data (parent and child)
        </p>
        <code>
            {`const form = useForm({defaultValues: ${JSON.stringify(defaultValues)} })`}
        </code>
        <br />
        <br />
        <PrintOneField fields={[parentField, props]} defaultValues={defaultValues} />
    </>
}
export const SelectWithDependsComponent = (props: SelectConfig & WithDepends) => {

    const parentField = {
        label: "Parent field",
        tag: "select",
        name: "parent",
        type: "simple",
        placeholder: "Pick one...",
        options: [{ label: "Option1", value: "1" }, { label: "Option2", value: "2" }, { label: "Option3", value: "3" }],
        validations: {
            required: true
        },
    }

    return <PrintOneField fields={[parentField, props]} />
}

const PrintOneField = <T extends Record<string, unknown>>({ fields, defaultValues, fieldComponents, ...field }: T) => {
    const [showjson, setShowJson] = useState(false)
    const copy = () => {
        navigator.clipboard.writeText(JSON.stringify(fields || field, undefined, 2));
    }

    const idForm = useId()

    const toggleJSON = () => {
        setShowJson(s => !s)
    }


    return <div className='d-flex gap-2  flex-wrap'>
        <div className='flex-grow-1' style={{ minWidth: "300px" }}>
            <div className='bg-light rounded-4 px-3 py-4 h-100'>
                <DynamicFormBuilder
                    defaultValues={defaultValues || getFieldDefaultValues((field.tag === "list" ? [{ ...field, fields }] : (fields || [field])) as never)}
                    fields={(field.tag === "list" ? [{ ...field, fields }] : (fields || [field])) as never}
                    id={idForm}
                    onSubmit={data => console.log(data)}
                    onInvalidSubmit={data => console.log(data)}
                    fieldComponents={fieldComponents as never}
                    fieldWrapper={{
                        props: {
                            className: "col-md-6"
                        }
                    }}

                    {
                    ...((field.tag !== "list" && fields) ? field : {})
                    }
                />
                <div className='mt-3'>
                    <button className='btn btn-primary' form={idForm}>Send form</button>
                </div>
            </div>
        </div>
        <div>
            <div className='bg-light rounded-4 py-4 px-4 h-100'>
                <div className='d-flex justify-content-between gap-3 align-items-center mb-3'>
                    <p className='fw-bold m-0'>Field config JSON </p>
                    <div>
                        <button className='btn btn-sm btn-dark' onClick={copy}>Copy</button>
                    </div>
                </div>
                <pre className='mb-0' style={{ maxHeight: "300px", overflow: "hidden auto" }}>
                    <button className='py-0 px-1 lh-1 me-2 position-sticky top-0 btn btn-sm btn-secondary' onClick={toggleJSON}>
                        {showjson ? "-" : "+"}
                    </button>
                    {showjson ?
                        JSON.stringify(field.tag === "list" ? { ...field, fields } : (fields || field), undefined, 2)
                        :
                        field.tag === "list" ? "{ ... }" : (fields ? "[ ... ]" : "{ ... }")
                    }
                </pre>
            </div>
        </div>
    </div >
}



// VALIDATIONS

export const CheckboxValidationsComponent = (props: Pick<NonNullable<CheckboxConfig["validations"]>, "required" | "min" | "max">) => {
    const simple = {
        ...getSimpleStoryArgs<CheckboxConfig["type"]>("simple"),
        validations: { required: props?.required || false },
        tag: "checkbox"
    }
    const multiple = {
        ...getSimpleStoryArgs<CheckboxConfig["type"]>("multiple"),
        validations: props,
        tag: "checkbox",
        options: ["Option1", "Option2", "Option3", "Option4"]
    }

    return <div>
        <p>Avalaible validations: <i>required</i></p>
        <PrintOneField {...simple} />
        <br />
        <hr />
        <br />
        <p>Avalaible validations: <i>required, min, max</i></p>
        <PrintOneField {...multiple} />
    </div>
}

export const DateValidationsComponent = (props: Pick<NonNullable<DateConfig["validations"]>, "required" | "min" | "max" | "valueAsDate">) => {
    const input = {
        ...getSimpleStoryArgs<DateConfig["type"]>("date"),
        validations: props,
        tag: "date"
    }
    return <div>
        <PrintOneField {...input} />
        <br />
        <p>Avalaible validations (values):</p>
        <ul>
            <li><b>min:</b> string
                <p>Valid format as date:</p>
                <ul>
                    <li>01-01-2024</li>
                    <li>2024-01-01</li>
                </ul>
                <br />
                <p>Valid format as string (Calculated by current date):</p>
                <ul>
                    <li>last 7 days</li>
                    <li>last 1 month</li>
                    <li>last 2 months</li>
                    <li>next 3 days</li>
                    <li>next 1 month</li>
                </ul>
            </li>
            <li><b>max:</b> Same as min</li>
        </ul>
    </div>
}

export const InputValidationsComponent = ({ type, ...props }: { type: InputConfig["type"] } & Pick<NonNullable<InputConfig["validations"]>, "required" | "min" | "max" | "minLength" | "maxLength" | "pattern">) => {
    const input = {
        ...getSimpleStoryArgs<InputConfig["type"]>(type),
        validations: props,
        tag: "input"
    }
    return <div>
        <PrintOneField {...input} />
    </div>
}

export const TimeValidationsComponent = (props: Pick<NonNullable<TimeConfig["validations"]>, "required" | "min" | "max">) => {
    const input = {
        ...getSimpleStoryArgs<TimeConfig["type"]>("simple"),
        validations: props,
        tag: "time"
    }
    return <div>
        <PrintOneField {...input} />
    </div>
}

export const SelectValidationsComponent = (props: Pick<NonNullable<SelectConfig["validations"]>, "required" | "min" | "max">) => {
    const simple = {
        ...getSimpleStoryArgs<SelectConfig["type"]>("simple"),
        options: ["Option1", "Option2", "Option3", "Option4"],
        validations: { required: props?.required || false },
        tag: "select"
    }
    const multiple = {
        ...getSimpleStoryArgs<SelectConfig["type"]>("multiple"),
        validations: props,
        tag: "select",
        options: ["Option1", "Option2", "Option3", "Option4"]
    }
    return <div>
        <p>Avalaible validations: <i>required</i></p>
        <PrintOneField {...simple} />
        <br />
        <hr />
        <br />
        <p>Avalaible validations: <i>required, min, max</i></p>
        <PrintOneField {...multiple} />
    </div>
}

export const FileValidationsComponent = (props: Pick<NonNullable<FileConfig["validations"]>, "required" | "min" | "max" | "maxFileSize" | "minFileSize" | "accept">) => {
    const simple = {
        ...getSimpleStoryArgs<FileConfig["type"]>("simple"),
        validations: props,
        tag: "file"
    }
    const multiple = {
        ...getSimpleStoryArgs<FileConfig["type"]>("multiple"),
        validations: props,
        tag: "file",
    }
    return <div>
        <p>Avalaible validations: <i>required, min, max, accept</i></p>
        <PrintOneField {...simple} />
        <br />
        <hr />
        <br />
        <p>Avalaible validations: <i>required, min, max, maxFileSize, minFileSize, accept </i></p>
        <PrintOneField {...multiple} />
    </div>
}

export const ListValidationsComponent = (props: Pick<NonNullable<ListConfig["validations"]>, "required" | "min" | "max">) => {
    const simple = {
        ...getSimpleStoryArgs<ListConfig["type"]>("group"),
        validations: props,
        fields: [
            {
                wrapperClassName: "col-6",
                tag: "input",
                type: "text",
                name: "name",
                label: "Name:",
                validations: {
                    required: true
                }
            },
            {
                wrapperClassName: "col-6",
                tag: "input",
                type: "number",
                name: "age",
                label: "Age:",
                validations: {
                    required: true
                }
            }
        ],
        tag: "list",
    }
    return <div>
        <PrintOneField {...simple} />
    </div>
}
