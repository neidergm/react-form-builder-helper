import { FieldValues, UseFormProps, useForm } from "react-hook-form";
import FieldPrinter from "./FieldPrinter";
import { FormProps } from "./interfaces/form.interface";
import { ComponentType, useEffect } from "react";
import { I_JsonObject } from "./interfaces/generic.interfaces";
import { FieldTypes } from "./interfaces/fields.interface";

export type DynamicFormProps = FormProps & {
    className?: string,
    useFormProps?: Omit<UseFormProps, "defaultValues">,
    fieldWrapper?: {
        component?: ComponentType,
        props?: { className?: string } & I_JsonObject
    },
    fieldComponents?: {
        [K in FieldTypes["tag"]]: FieldComponent
    }
}

type FieldComponent = {
    label?: ComponentType,
    component?: ComponentType
}

const getCustomComponentType = (name: string, types: DynamicFormProps["fieldComponents"]) => {

    if (!types || !name) return undefined

    let t = types[name as never];

    if (!t) {
        const [tag] = name.split(".");
        t = types[tag as never];
    }

    return t as FieldComponent | undefined;
}

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
    className = "row row-gap-3"
}: DynamicFormProps) => {
    const form = useForm<FieldValues>({ defaultValues, ...useFormProps });

    const {
        handleSubmit,
        formState: { errors },
        getValues
    } = form;

    useEffect(() => {
        () => {
            saveTemporalData?.(getValues())
        }
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)} id={id} noValidate>
            <div className={className}>
                {
                    fields.map((field, i) => {
                        const customComponent = getCustomComponentType(`${field.tag}.${field.type}`, fieldComponents);
                        return <FieldPrinter
                            form={form}
                            key={i}
                            Wrapper={fieldWrapper?.component}
                            wrapperProps={fieldWrapper?.props}
                            FieldComponent={customComponent?.component}
                            Label={customComponent?.label}
                            field={field}
                            error={errors[field.name]}
                        />
                    })
                }
            </div>
        </form>
    )
}
