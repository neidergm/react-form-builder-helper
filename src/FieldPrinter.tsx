/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, createElement } from "react"
import createFormField from "./utils/fieldCreator"
import { FormFeedback } from "reactstrap"
import WrapperFormGroup from "./components/WrapperFormGroup"
import { default as Lbl } from "./components/Label"
import { Controller, FieldError, FieldErrorsImpl, Merge, UseFormReturn } from "react-hook-form"
import { FieldTypes, HtmlConfig } from "./interfaces/fields.interface"
import registerField from "./utils/registerField"
import validationsMapper from "./utils/validatoinsMapper"
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
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<I_JsonObject>>,
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


  if (fieldTemp.tag === "HTML") {
    return createElement(WrapperComponent, wrapperProps as T,
      createFormField(fieldTemp as unknown as RegisteredField, FieldComponent, Label || Lbl)
    )
  }
  const { controlled, dependsOn, ...field } = fieldTemp;

  const component = (parentValue?: I_JsonObject) => {
    if (controlled || (field.request)) {
      return <Controller
        name={field.name}
        control={control}
        defaultValue={field.defaultValue}
        rules={validationsMapper(field.validations || {})}
        render={({ field: rf, fieldState: { error } }) => {
          delete field.defaultValue;
          const props = { ...field, ...rf, invalid: !!error } as unknown as RegisteredField

          parentValue && (props.parentValue = parentValue);

          return createElement(WrapperComponent, wrapperProps as T,
            <>
              {createFormField(props, FieldComponent, Label || Lbl)}
              <FormFeedback>{error?.message as string}</FormFeedback>
            </>)
        }}
      />
    } else {
      const registeredField = registerField(field, register);
      registeredField.invalid = !!error;
      parentValue && (registeredField.parentValue = parentValue);

      return createElement(WrapperComponent, wrapperProps as T,
        <>
          {createFormField(registeredField, FieldComponent, Label || Lbl)}
          <FormFeedback>{error?.message as string}</FormFeedback>
        </>)
    }
  }

  return dependsOn ? <ChildrenWrapper
    control={control} dependsOn={dependsOn} children={component}
  />
    : component()
}

export default FieldPrinter
