import cx from 'classnames'
import * as React from 'react'
import 'styles/radio-button.scss'

interface IProps {
  checked: boolean
  children: JSX.Element | string
  error: boolean
  greenChecked: boolean
  id: string
  name: number
  onChange: () => void
  value: number
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
}: IProps): JSX.Element => (
  <div className="mdc-form-field db">
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
          name={`${name}`}
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
