import { FieldValues, UseFormProps, useForm } from "react-hook-form";
import FieldPrinter from "./FieldPrinter";
import { FormProps } from "./interfaces/form.interface";
import { ComponentType, useEffect } from "react";
import { I_JsonObject } from "./interfaces/generic.interfaces";

export const DynamicFormBuilder = ({
    id,
    fields,
    defaultValues,
    onSubmit,
    onInvalidSubmit,
    fieldWrapper,
    fieldComponents,
    saveTemporalData,
    useFormProps,
    className = "row"
}: FormProps & {
    className?: string,
    useFormProps?: Omit<UseFormProps, "defaultValues">,
    fieldWrapper?: {
        component?: ComponentType,
        props?: { className?: string } & I_JsonObject
    },
    fieldComponents?: {
        label?: ComponentType,
        component?: ComponentType
    }
}) => {
    const form = useForm<FieldValues>({ defaultValues, ...useFormProps });

    const {
        handleSubmit,
        formState: { errors },
        getValues
    } = form;

    useEffect(() => {
        saveTemporalData?.(getValues())
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)} id={id} noValidate>
            <div className={className}>
                {
                    fields.map((field, i) => {
                        return <FieldPrinter
                            form={form}
                            key={i}
                            Wrapper={fieldWrapper?.component}
                            wrapperProps={fieldWrapper?.props}
                            FieldComponent={fieldComponents?.component}
                            Label={fieldComponents?.label}
                            field={field}
                            error={errors[field.name]}
                        />
                    })
                }
            </div>
        </form>
    )
}
