import { Button } from 'reactstrap';
import Form from '../Form';
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

export const SelectWithRequestComponent = (props: SelectConfig & WithRequestConfig) => <PrintOneField {...props} />
export const SelectWithDependsComponent = (props: SelectConfig & WithRequestConfig & WithDepends) => {

    const parentField = {
        label: "Parent",
        tag: "select",
        name: "select1",
        type: "simple",
        placeholder: "Pick one...",
        options: [{ label: "Option1", value: "1" }, { label: "Option2", value: "2" }, { label: "Option3", value: "3" }],
        // defaultValue: "1",
        // controlled: true,
        validations: {
            required: true
        },
    }

    return <PrintOneField fields={[parentField, props]} />
}



const PrintOneField = <T extends Record<string, unknown>>({ fields, ...field }: T) => {

    const [showjson, setShowJson] = useState(false)

    const copy = () => {
        navigator.clipboard.writeText(JSON.stringify(fields || field, undefined, 2));
    }

    const toggleJSON = () => {
        setShowJson(s => !s)
    }

    return <div className='d-flex gap-4'>
        <div className='flex-grow-1'>
            <Form
                {...field}
                fields={fields as never || [field as never]}
                onSubmit={(data) => {
                    console.log(data)
                }}
            />
        </div>
        <div>
            <div className='bg-light rounded-4 py-4 px-4 h-100'>
                <div className='d-flex justify-content-between gap-3 align-items-center mb-3'>
                    <p className='fw-bold m-0'>Field config JSON </p>
                    <div>
                        <Button size='sm' color='dark' onClick={copy}>Copy</Button>
                    </div>
                </div>
                <pre className='mb-0' style={{maxHeight: "300px", overflow: "hidden auto"}}>
                    <Button size='small' className='py-0 px-1 lh-1 me-2 position-sticky top-0' onClick={toggleJSON}>
                        {showjson ? "-" : "+"}
                    </Button>
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
