import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { FormProps } from './../interfaces/form.interface';
import { Button, FormGroup, Label, Row } from 'reactstrap';
import FieldPrinter from './../FieldPrinter';
import { I_JsonObject } from '../interfaces/generic.interfaces';

const DynamicForm = ({
    id,
    fields,
    defaultValues,
    onSubmit
}: FormProps) => {
    // const fieldsJson = fields.reduce((p, c)=>{return {...p, [c.name]: ""}}, {})
    const {
        handleSubmit,
        register,
        control,
        getValues,
        formState: { errors }
    } = useForm<I_JsonObject>({ defaultValues });

    const submit: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data)
    }

    const submitError: SubmitErrorHandler<FieldValues> = (data) => {
        console.log(data)
    }

    // console.log(getValues())

    return (
        <form onSubmit={handleSubmit(submit, submitError)} id={id}>
            <Row>
                {
                    fields.map((field, i) => {
                        return <FieldPrinter
                            control={control}
                            register={register}
                            key={i}
                            Wrapper={FormGroup}
                            wrapperProps={{
                                className: "col-md-6 col-lg-12 col-xl-6"
                            }}
                            // FieldComponent={fieldRelation(field.tag)}
                            Label={Label}
                            field={field}
                            error={errors[field.name]}
                        />
                    })
                }
            </Row>

            <Button>Send</Button>
        </form>
    )
}

export default DynamicForm