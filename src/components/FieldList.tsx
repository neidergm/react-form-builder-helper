import { ListConfig } from "../interfaces/fields.interface"
import { FieldErrors, useFieldArray, UseFormReturn } from "react-hook-form"
import FieldPrinter from "../FieldPrinter"
import { useCallback, useEffect, useMemo } from "react"
import { getFieldDefaultValues } from "../utils/getFieldDefaultValues"
import classnames from "classnames"

type Props = ListConfig & {
  form: UseFormReturn,
  min?: number,
  max?: number
}

const FieldList = ({
  form,
  fields,
  min = 0,
  max,
  className,
  ...props
}: Props) => {

  const { control, formState: { errors } } = form;
  const errorsList = errors?.[props.name] as FieldErrors[] | undefined;

  const { fields: arrayFields, append, remove } = useFieldArray({ control, name: props.name });

  const defaultValues = useMemo(() => getFieldDefaultValues(fields), [fields]);
  const handleAddField = useCallback(() => append(defaultValues), [append, defaultValues]);
  const handleQuitField = useCallback((idx: number | number[]) => remove(idx), [remove]);

  /**
   * Handles quitting all fields if the arrayFields length is greater than the minimum specified.
   */
  const handleQuitAllField = () => {
    if (arrayFields.length > min) {
      handleQuitField(Array.from({ length: arrayFields.length - min }, (_, i) => min + i));
    }
  };

  const renderFields = useCallback((arrField: typeof arrayFields[0], index: number) => (
    <div key={arrField.id} className={classnames(className, "row row-gap-3 mb-3 position-relative")}>
      {fields.map((field) => {
        const basename = `${props.name}.${index}`;
        const name = `${basename}.${field.name}`;

        const fieldConfig = {
          ...field,
          disabled: props.disabled || field.disabled,
          name,
          id: `${basename}.${field.id || field.name}`,
        };

        if (field.dependsOn) {
          fieldConfig.dependsOn = typeof field.dependsOn === "string"
            ? `${basename}.${field.dependsOn}`
            : field.dependsOn.map((d) => ({ ...d, name: `${basename}.${d.name}` }))
        }

        return (
          <FieldPrinter
            key={name}
            field={fieldConfig}
            form={form}
            error={errorsList?.[index]?.[field.name]}
          />
        );
      })}
      {!(min === max || arrayFields.length <= min) && (
        <XButton onClick={() => handleQuitField(index)} />
      )}
    </div>
  ), [fields, props.name, props.disabled, form, errorsList, min, max, arrayFields.length, handleQuitField, className]);


  useEffect(() => {
    const df = getFieldDefaultValues(fields);
    if (arrayFields.length < min) {
      const fieldsToAdd = min - arrayFields.length;
      const newFields = Array(fieldsToAdd).fill(df);
      append(newFields, { shouldFocus: false });
    }
  }, [min]);

  return (
    <>
      {arrayFields.map(renderFields)}
      {!(min === max) && <div className="d-flex justify-content-between mb-3">
        <div>
          {max !== arrayFields.length && <button type="button" onClick={handleAddField} className="btn btn-sm btn-outline-dark py-1"
            disabled={max ? arrayFields.length >= max : false}>Add</button>}
        </div>
        <div>
          {min !== arrayFields.length &&
            <button type="button" onClick={handleQuitAllField} className="btn btn-sm btn-outline-danger">Remove all</button>
          }
        </div>
      </div>
      }
    </>
  )
}

const styles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  // border: "1px solid currentColor",
  overflow: "hidden",
  color: "#ff5353",
  cursor: "pointer",
  position: "absolute",
  right: "0",
  top: "0",
  padding: "0px",
  backgroundColor: "#ff53533d",
} as const;
const XButton = ({ onClick }: { onClick: () => void }) => (
  <span style={styles} onClick={onClick} title="Remove">
    <span style={{ paddingBottom: "3px" }}>&#8722;</span>
  </span>
);

export default FieldList