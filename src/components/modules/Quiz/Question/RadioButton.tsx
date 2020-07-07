/** @jsx jsx */
import { jsx } from 'theme-ui'
import cx from 'classnames'
import React from 'react'
import '@material/react-radio/dist/radio.css'
import 'styles/radio-button.scss'
import Radio, { NativeRadioControl } from '@material/react-radio'

interface IProps {
  checked: boolean
  children: string
  error: boolean
  greenChecked: boolean
  id: string
  name: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  value: string
}

const RadioButton = ({ checked, children, error, greenChecked, id, name, onChange, value }: IProps): JSX.Element => (
  <div>
    <Radio label={children} key={id} className={cx({ isGreen: greenChecked, isRed: error })}>
      <NativeRadioControl
        name={name}
        value={value}
        className={cx({
          // This is necessary to fix a strange bug
          // that didn't allow to check 2 radios of a category
          checked: checked || greenChecked,
        })}
        checked={checked || greenChecked}
        id={id}
        onChange={onChange}
      />
    </Radio>
  </div>
)

export default React.memo(RadioButton)
