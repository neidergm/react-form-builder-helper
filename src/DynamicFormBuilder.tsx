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
    /**
     * true if the form is currently loading async default values
     */
    disableOnLoading?: boolean,
    disabled?: boolean,
    fieldComponents?: Partial<Record<FieldTypes['tag'] | `${FieldTypes['tag']}.${FieldTypes['type']}`, FieldComponent>>
}

type FieldComponent = {
    label?: ComponentType<any>,
    component?: ComponentType<any>,
    includeFormUtils?: boolean
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
    className = "row row-gap-3",
    disableOnLoading,
    disabled
}: DynamicFormProps) => {
    const form = useForm<FieldValues>({ defaultValues, ...useFormProps });

    const {
        handleSubmit,
        formState: { errors, isLoading },
        getValues
    } = form;

    const disableForm = disabled || (disableOnLoading && isLoading)

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
                            includeFormUtils={customComponent?.includeFormUtils}
                            field={field}
                            error={errors[field.name]}
                            disabled={disableForm}
                        />
                    })
                }
            </div>
        </form>
    )
}
