// @flow
import * as React from 'react'
import 'styles/select.scss'

type Props = {
  name: number,
  onChange: Function,
  options: Array<{index: number, text: string}>,
  value?: {index: number, text: string},
}
const SelectInput = ({name, onChange, options = [], value}: Props) => (
  <div className="mdc-select">
    <select
      className="mdc-select__native-control"
      name={name}
      onChange={onChange}
      value={value ? value.index : ''}
    >
      <option value="" />
      {value !== undefined && <option value={value.index}>{value.text}</option>}
      {options.map(({index, text}) => (
        <option key={index} value={index}>
          {text}
        </option>
      ))}
    </select>
    {/* <label className="mdc-floating-label">Pick a Food Group</label> */}
    <div className="mdc-line-ripple" />
  </div>
)

export default SelectInput
