import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { FormProps } from './interfaces/form.interface';
import { Button, FormGroup, Row } from 'reactstrap';
import FieldPrinter from './FieldPrinter';
import { I_JsonObject } from './interfaces/generic.interfaces';

const Form = ({
    id,
    fields,
    defaultValues
}: FormProps) => {
    // const fieldsJson = fields.reduce((p, c)=>{return {...p, [c.name]: ""}}, {})
    const form = useForm<I_JsonObject>({
        defaultValues: {
            ...fields.reduce((p, c) => ({ ...p, [c.name]: c.defaultValue }), {}),
            ...defaultValues
        }
    });

    const {
        handleSubmit,
        formState: { errors }
    } = form;

    const submit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    const submitError: SubmitErrorHandler<FieldValues> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit, submitError)} id={id} noValidate className='bg-light rounded-4 px-3 py-4 h-100'>
            <Row>
                {
                    fields.map((field, i) => {
                        return <FieldPrinter
                            form={form}
                            key={i}
                            Wrapper={FormGroup}
                            wrapperProps={{
                                className: "col-md-6 col-lg-12 col-xl-6"
                            }}
                            // FieldComponent={fieldRelation(field.tag)}
                            // Label={Label}
                            field={field}
                            error={errors[field.name]}
                        />
                    })
                }
            </Row>

            <Button className='px-5 mt-4' color='primary'>Send form</Button>
        </form>
    )
}

export default Form