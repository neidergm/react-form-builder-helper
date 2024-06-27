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

  const { wrapperClassName, ...fieldTemp } = _field;
  const WrapperComponent = Wrapper || WrapperFormGroup;

  if (wrapperClassName) {
    wrapperProps.className = classnames(wrapperProps.className, wrapperClassName)
  }

  if (fieldTemp.tag === "HTML") return createElement(WrapperComponent, wrapperProps as T,
    createFormField(fieldTemp as unknown as RegisteredField, FieldComponent, Label || Lbl)
  )

  const { controlled, dependsOn, ...field } = fieldTemp;

  const compProps = {
    Label: Label || Lbl,
    control,
    FieldComponent
  }

  const component = (parentValue?: I_JsonObject, newProps?: I_JsonObject) => {
    const finallyFieldProps = newProps ? { ...field, ...newProps } : field;

    if (controlled || (finallyFieldProps.request)) {
      return createElement(WrapperComponent, wrapperProps as T,
        <ControlledField {...compProps} finallyFieldProps={finallyFieldProps} parentValue={parentValue} />
      )
    } else {
      return createElement(WrapperComponent, wrapperProps as T,
        <UncrontrolledFIeld {...compProps}
          finallyFieldProps={finallyFieldProps}
          parentValue={parentValue}
          error={error}
          register={register}
        />
      )
    }
  }

  return dependsOn ?
    <ChildrenWrapper control={control} dependsOn={dependsOn} children={component} /> : component()
}

type ComponentFieldProps = {
  finallyFieldProps: Omit<FieldTypes, "dependsOn" | "controlled" | "wrapperClassName">;
  control: Control<FieldValues>;
  FieldComponent?: string | ComponentType,
  Label: ComponentType,
  parentValue?: I_JsonObject;
}

const ControlledField = ({
  finallyFieldProps,
  control,
  FieldComponent,
  Label,
  parentValue,
}: ComponentFieldProps) => {
  return <Controller
    name={finallyFieldProps.name}
    control={control}
    defaultValue={finallyFieldProps.defaultValue}
    rules={validationsMapper(finallyFieldProps.validations, { type: finallyFieldProps.type, tag: finallyFieldProps.tag })}
    render={({ field: rf, fieldState: { error } }) => {
      const props = { ...finallyFieldProps, ...rf, invalid: !!error } as RegisteredField
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
  finallyFieldProps,
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
  const registeredField = registerField(finallyFieldProps as FieldTypes, register);

  registeredField.invalid = !!error;
  parentValue && (registeredField.parentValue = parentValue);

  return <>
    {createFormField(registeredField, FieldComponent, Label)}
    <Feedback>{error?.message}</Feedback>
  </>
}

export default FieldPrinter
