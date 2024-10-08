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
  includeFormUtils?: boolean
  disabled?: boolean
}

const FieldPrinter = <T extends Record<string, unknown>>({
  field: _field, error, Wrapper, wrapperProps: wp, FieldComponent, Label, form, includeFormUtils, disabled
}: Props<T>) => {
  const { register, control, setValue, ...formUtils } = form;
  const wrapperProps: I_JsonObject = wp || {};

  const { wrapperClassName: wcn, ...fieldTemp } = _field;
  const WrapperComponent = Wrapper || WrapperFormGroup;

  const wrapperClassName = classnames(wrapperProps.className || "", wcn || "");

  if (wrapperClassName) wrapperProps.className = wrapperClassName;

  if (fieldTemp.tag === "HTML") return createElement(WrapperComponent, wrapperProps as T,
    createFormField(fieldTemp as unknown as RegisteredField, FieldComponent, Label || Lbl)
  )

  if (fieldTemp.tag === "list") {
    (fieldTemp as any).form = form;
    return createElement(WrapperComponent, wrapperProps as T,
      createFormField(fieldTemp as unknown as RegisteredField, FieldComponent, Label || Lbl)
    )
  }

  const { controlled, dependsOn, dependsOnChange, ...field } = fieldTemp;

  const compProps = {
    Label: Label || Lbl,
    control,
    FieldComponent
  }

  let finallyFieldProps = includeFormUtils ? { ...field, formUtils } : field;

  if (disabled) finallyFieldProps.disabled = disabled;

  const component = (parentValue?: I_JsonObject, newProps?: I_JsonObject) => {

    if(form.formState.isLoading && finallyFieldProps.request && dependsOn) {
      delete finallyFieldProps.request;
      delete finallyFieldProps.doRequest;
    }

    if (parentValue) {
      finallyFieldProps = { ...finallyFieldProps, parentValue, formValues: formUtils.getValues(), setValue } as unknown as typeof finallyFieldProps;
      if (newProps) {
        const { wrapperClassName: wcnChanged, ...extraProps } = newProps;
        finallyFieldProps = { ...finallyFieldProps, ...extraProps };
        wrapperProps.className = classnames(wrapperClassName, wcnChanged || "");
      } else {
        wrapperProps.className = wrapperClassName
      }
    }

    if (controlled || (finallyFieldProps.tag === "select" && finallyFieldProps.request)) {
      return createElement(WrapperComponent, wrapperProps as T,
        <ControlledField {...compProps} fieldProps={finallyFieldProps} />
      )
    } else {
      return createElement(WrapperComponent, wrapperProps as T,
        <UncrontrolledFIeld {...compProps}
          fieldProps={finallyFieldProps}
          error={error}
          register={register}
        />
      )
    }
  }

  return dependsOn ?
    <ChildrenWrapper
      control={control}
      dependsOn={dependsOn}
      children={component}
      dependsOnChange={dependsOnChange}
    /> : component()
}

type ComponentFieldProps = {
  fieldProps: Omit<FieldTypes, "dependsOn" | "controlled" | "wrapperClassName">;
  control: Control<FieldValues>;
  FieldComponent?: string | ComponentType,
  Label: ComponentType,
}

const ControlledField = ({
  fieldProps,
  control,
  FieldComponent,
  Label,
}: ComponentFieldProps) => {
  const validations = validationsMapper(fieldProps.validations, { type: fieldProps.type, tag: fieldProps.tag });
  return <Controller
    name={fieldProps.name}
    control={control}
    defaultValue={fieldProps.defaultValue}
    rules={validations}
    render={({ field: rf, fieldState: { error } }) => {
      const props = { ...fieldProps, ...rf, invalid: !!error, validations } as RegisteredField;
      if (!props.id) props.id = props.name;
      delete props.defaultValue;

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
}: ComponentFieldProps & {
  register: UseFormRegister<FieldValues>,
  error?: GlobalError,
}
) => {
  const registeredField = registerField(fieldProps as FieldTypes, register);

  registeredField.invalid = !!error;

  return <>
    {createFormField(registeredField, FieldComponent, Label)}
    <Feedback>{error?.message}</Feedback>
  </>
}

export default FieldPrinter
