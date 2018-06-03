// @flow
import * as React from 'react'
import 'styles/radio-button.scss'

type Props = {
  checked: boolean,
  children: React.Node,
  id: string,
  name: number,
  onChange: Function,
  value: number,
}
const RadioButton = ({checked, children, id, name, onChange, value}: Props) => (
  <div className="mdc-form-field">
    <label className="flex items-center f4" htmlFor={id}>
      <div className="mdc-radio">
        <input
          checked={checked}
          className="mdc-radio__native-control"
          id={id}
          name={name}
          onChange={onChange}
          type="radio"
          value={value}
        />
        <div className="mdc-radio__background">
          <div className="mdc-radio__outer-circle" />
          <div className="mdc-radio__inner-circle" />
        </div>
      </div>
      {children}
    </label>
  </div>
)
export default RadioButton
