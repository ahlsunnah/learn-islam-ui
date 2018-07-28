// @flow
import * as React from 'react'
import 'styles/checkbox.scss'

type Props = {
  checked: boolean,
  children: string,
  handleChange: Function,
}
const Checkbox = ({checked, children, handleChange}: Props) => (
  <label className="flex items-center">
    <div className="mdc-form-field">
      <div className="mdc-checkbox">
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          checked={checked}
          onChange={handleChange}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>
    </div>
    {children}
  </label>
)

export default Checkbox
