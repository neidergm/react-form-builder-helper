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
    WithDepends
} from '../interfaces/fields.interface';
import { useState } from 'react';
import { DynamicFormBuilder, DynamicFormProps } from '../DynamicFormBuilder';


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

export const DynamicFormComponent = (props: DynamicFormProps) => <PrintOneField {...props} />

export const CheckboxWithRequestComponent = (props: CheckboxConfig & WithRequestConfig) => <PrintOneField {...props} />

export const SelectWithRequestComponent = (props: SelectConfig & WithRequestConfig) => <PrintOneField {...props} defaultValues={{ [props.name]: props.defaultValue }} />
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

const PrintOneField = <T extends Record<string, unknown>>({ fields, defaultValues, ...field }: T) => {
    const [showjson, setShowJson] = useState(false)
    const copy = () => {
        navigator.clipboard.writeText(JSON.stringify(fields || field, undefined, 2));
    }

    const toggleJSON = () => {
        setShowJson(s => !s)
    }

    return <div className='d-flex gap-2  flex-wrap'>
        <div className='flex-grow-1' style={{ minWidth: "300px" }}>
            <div className='bg-light rounded-4 px-3 py-4 h-100'>
                <DynamicFormBuilder
                    defaultValues={defaultValues as never}
                    fields={fields as never || [field as never]}
                    id="NG_FORM"
                    onSubmit={data => console.log(data)}
                    onInvalidSubmit={data => console.log(data)}
                    fieldWrapper={{
                        props: {
                            className: "col-md-6"
                        }
                    }}
                />
                <div className='mt-3'>
                    <button className='btn btn-primary' form="NG_FORM">Send form</button>
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
                        JSON.stringify(fields || field, undefined, 2)
                        :
                        fields ? "[ ... ]" : "{ ... }"
                    }
                </pre>
            </div>
        </div>
    </div >
}
