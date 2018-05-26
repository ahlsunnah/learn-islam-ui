// @flow
import * as React from 'react'
import 'styles/select.scss'

type Props = {
  name: string,
  onChange: Function,
  options: Array<string>,
  value?: string,
}
const SelectInput = ({name, onChange, options = [], value}: Props) => (
  <div className="mdc-select">
    <select
      className="mdc-select__native-control"
      name={name}
      onChange={onChange}
    >
      <option value="" />
      {value && (
        <option value={value} selected>
          {value}
        </option>
      )}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {/* <label className="mdc-floating-label">Pick a Food Group</label> */}
    <div className="mdc-line-ripple" />
  </div>
)

export default SelectInput
