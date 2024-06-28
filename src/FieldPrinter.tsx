import { ComponentType, createElement } from "react"
import createFormField from "./utils/fieldCreator"
import Feedback from "./components/Feedback"
import WrapperFormGroup from "./components/WrapperFormGroup"
import { default as Lbl } from "./components/Label"
import { Control, Controller, FieldValues, GlobalError, UseFormRegister, UseFormReturn } from "react-hook-form"
import { FieldTypes, HtmlConfig } from "./interfaces/fields.interface"
import registerField from "./utils/registerField"
import validationsMapper from "./utils/validationsMapper"
import { RegisteredField } from "./interfaces/registered.interface"
import classnames from 'classnames';
import ChildrenWrapper from "./components/ChildrenWrapper"
import { I_JsonObject } from "./interfaces/generic.interfaces"

type Props<T> = {
  FieldComponent?: string | ComponentType,
  Wrapper?: ComponentType<T>;
  Label?: ComponentType,
  wrapperProps?: T & { className?: string },
  field: FieldTypes | HtmlConfig,
  error?: GlobalError,
  form: UseFormReturn,
}

const FieldPrinter = <T extends Record<string, unknown>>({
  field: _field, error, Wrapper, wrapperProps: wp, FieldComponent, Label, form: { register, control }
}: Props<T>) => {

  const wrapperProps: I_JsonObject = wp || {};

  const { wrapperClassName: wcn, ...fieldTemp } = _field;
  const WrapperComponent = Wrapper || WrapperFormGroup;

  const wrapperClassName = classnames(wrapperProps.className || "", wcn || "");

  if (wrapperClassName) wrapperProps.className = wrapperClassName;

  if (fieldTemp.tag === "HTML") return createElement(WrapperComponent, wrapperProps as T,
    createFormField(fieldTemp as unknown as RegisteredField, FieldComponent, Label || Lbl)
  )

  const { controlled, dependsOn, dependsOnChange, ...field } = fieldTemp;

  const compProps = {
    Label: Label || Lbl,
    control,
    FieldComponent
  }

  const component = (parentValue?: I_JsonObject, newProps?: I_JsonObject) => {
    let finallyFieldProps = field;

    if (parentValue) {
      if (newProps) {
        const { wrapperClassName: wcnChanged, ...extraProps } = newProps;
        finallyFieldProps = { ...field, ...extraProps };
        wrapperProps.className = classnames(wrapperClassName, wcnChanged || "");
      } else {
        wrapperProps.className = wrapperClassName
      }
    }

    if (controlled || (finallyFieldProps.request)) {
      return createElement(WrapperComponent, wrapperProps as T,
        <ControlledField {...compProps} fieldProps={finallyFieldProps} parentValue={parentValue} />
      )
    } else {
      return createElement(WrapperComponent, wrapperProps as T,
        <UncrontrolledFIeld {...compProps}
          fieldProps={finallyFieldProps}
          parentValue={parentValue}
          error={error}
          register={register}
        />
      )
    }
  }

  return dependsOn ?
    <ChildrenWrapper control={control} dependsOn={dependsOn} children={component} dependsOnChange={dependsOnChange} /> : component()
}

type ComponentFieldProps = {
  fieldProps: Omit<FieldTypes, "dependsOn" | "controlled" | "wrapperClassName">;
  control: Control<FieldValues>;
  FieldComponent?: string | ComponentType,
  Label: ComponentType,
  parentValue?: I_JsonObject;
}

const ControlledField = ({
  fieldProps,
  control,
  FieldComponent,
  Label,
  parentValue,
}: ComponentFieldProps) => {
  return <Controller
    name={fieldProps.name}
    control={control}
    defaultValue={fieldProps.defaultValue}
    rules={validationsMapper(fieldProps.validations, { type: fieldProps.type, tag: fieldProps.tag })}
    render={({ field: rf, fieldState: { error } }) => {
      const props = { ...fieldProps, ...rf, invalid: !!error } as RegisteredField
      delete props.defaultValue;
      parentValue && (props.parentValue = parentValue);

      return <>
        {createFormField(props, FieldComponent, Label)}
        <Feedback>{error?.message}</Feedback>
      </>
    }}
  />
}

const UncrontrolledFIeld = ({
  fieldProps,
  FieldComponent,
  Label,
  register,
  error,
  parentValue,
}: ComponentFieldProps & {
  register: UseFormRegister<FieldValues>,
  error?: GlobalError,
}
) => {
  const registeredField = registerField(fieldProps as FieldTypes, register);

  registeredField.invalid = !!error;
  parentValue && (registeredField.parentValue = parentValue);

  return <>
    {createFormField(registeredField, FieldComponent, Label)}
    <Feedback>{error?.message}</Feedback>
  </>
}

export default FieldPrinter
