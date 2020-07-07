import * as React from 'react'
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox'
import FormControlLabel, { FormControlLabelProps as MuiFormControlLabelProps } from '@material-ui/core/FormControlLabel'
import { FieldProps } from 'formik'
import invariant from 'tiny-warning'

export interface ICheckboxProps
  extends FieldProps,
    Omit<MuiCheckboxProps, 'name' | 'value' | 'error' | 'form' | 'checked' | 'defaultChecked' | 'type'> {
  type?: string
}

export interface ICheckboxWithLabelProps extends FieldProps, ICheckboxProps {
  label: Omit<MuiFormControlLabelProps, 'checked' | 'name' | 'value' | 'control'>
}

export function fieldToCheckbox({
  disabled,
  field,
  form: { isSubmitting },
  type,
  ...props
}: ICheckboxProps): MuiCheckboxProps {
  if (process.env.NODE_ENV !== 'production') {
    invariant(
      type === 'checkbox',
      `property type=checkbox is missing from field ${field.name}, this can caused unexpected behaviour`
    )
  }

  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
  }
}

export function Checkbox(props: ICheckboxProps) {
  return <MuiCheckbox {...fieldToCheckbox(props)} />
}

export function CheckboxWithLabel<Val = unknown>({ label, ...props }: ICheckboxWithLabelProps) {
  return <FormControlLabel control={<MuiCheckbox {...fieldToCheckbox(props)} />} {...label} />
}
