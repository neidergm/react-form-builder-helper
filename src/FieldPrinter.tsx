import { ComponentType, createElement } from "react"
import createFormField from "./utils/fieldCreator"
import { FormFeedback } from "reactstrap"
import WrapperFormGroup from "./components/WrapperFormGroup"
import { default as Lbl } from "./components/Label"
import { Control, Controller, FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form"
import { I_JsonObject } from "./interfaces/generic.interfaces"
import { FieldTypes } from "./interfaces/fields.interface"
import registerField from "./utils/registerField"
import validationsMapper from "./utils/validatoinsMapper"
import { RegisteredField } from "./interfaces/registered.interface"
import classnames from 'classnames';

type Props<T> = {
  FieldComponent?: string | ComponentType,
  Wrapper?: ComponentType<T>;
  Label?: ComponentType,
  wrapperProps?: T & { className?: string },
  field: FieldTypes,
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<I_JsonObject>>,
  control: Control,
  register: UseFormRegister<I_JsonObject>,
}

const FieldPrinter = <T extends Record<string, unknown>>({
  field: _field, error, Wrapper, wrapperProps = {} as T, FieldComponent, Label, control, register
}: Props<T>) => {

  const { wrapperClassName, ...field } = _field;
  const wrapperComponent = Wrapper || WrapperFormGroup;

  if (wrapperClassName) {
    wrapperProps.className = classnames(wrapperProps.className, wrapperClassName)
  }

  if (field.tag === "HTML") {
    return createElement(wrapperComponent, wrapperProps,
      createFormField(field as unknown as RegisteredField, FieldComponent, Label || Lbl)
    )
  }

  if (field.controlled || (field.request && field.defaultValue)) {
    return <Controller
      name={field.name}
      control={control}
      defaultValue={field.defaultValue}
      rules={validationsMapper(field.validations || {})}
      render={({ field: rf, fieldState: { error } }) => {
        delete field.defaultValue;
        const props = { ...field, ...rf, invalid: !!error } as unknown as RegisteredField
        delete props.controlled;

        return createElement(wrapperComponent, wrapperProps,
          <>
            {createFormField(props, FieldComponent, Label || Lbl)}
            <FormFeedback>{error?.message as string}</FormFeedback>
          </>)
      }}
    />
  }

  const registeredField = registerField(field, register);
  registeredField.invalid = !!error;

  return createElement(Wrapper || WrapperFormGroup,
    wrapperProps,
    <>
      {createFormField(registeredField, FieldComponent, Label || Lbl)}
      <FormFeedback>{error?.message as string}</FormFeedback>
    </>)
}

export default FieldPrinter
