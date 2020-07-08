import * as React from 'react'
import _get from 'lodash/get'
import MuiRadioGroup, { RadioGroupProps as MuiRadioGroupProps } from '@material-ui/core/RadioGroup'
import { FieldProps } from 'formik'

export interface IRadioGroupProps extends FieldProps, Omit<MuiRadioGroupProps, 'name' | 'value'> {}

export function fieldToRadioGroup({
  field,
  // Exclude Form
  form,
  ...props
}: IRadioGroupProps): MuiRadioGroupProps {
  return {
    ...props,
    ...field,
    value: _get(field, 'value', ''),
  }
}

export function RadioGroup(props: IRadioGroupProps) {
  return <MuiRadioGroup {...fieldToRadioGroup(props)} />
}
