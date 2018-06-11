// @flow
import cx from 'classnames'
import * as React from 'react'
import 'styles/radio-button.scss'

type Props = {
  checked: boolean,
  children: React.Node,
  error: boolean,
  greenChecked: boolean,
  id: string,
  name: number,
  onChange: Function,
  value: number,
}
const RadioButton = ({
  checked,
  children,
  error,
  greenChecked,
  id,
  name,
  onChange,
  value,
}: Props) => (
  <div className="mdc-form-field">
    <label className="flex items-center f4" htmlFor={id}>
      <div className="mdc-radio">
        <input
          checked={checked || greenChecked}
          className={cx('mdc-radio__native-control', {
            // This is necessary to fix a strange bug
            // that didn't allow to check 2 radios of a category
            checked: checked || greenChecked,
          })}
          id={id}
          name={name}
          onChange={onChange}
          type="radio"
          value={value}
        />
        <div
          className={cx('mdc-radio__background', {
            isGreen: greenChecked,
            isRed: error,
          })}
        >
          <div className="mdc-radio__outer-circle" />
          <div className="mdc-radio__inner-circle" />
        </div>
      </div>
      {children}
    </label>
  </div>
)
export default RadioButton
