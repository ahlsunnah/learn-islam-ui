// @flow
import cx from 'classnames'
import * as React from 'react'

type Props = {
  className?: string,
  name: number,
  onChange: Function,
  options: Array<{index: number, text: string}>,
  value?: {index: number, text: string},
}
const SelectInput = ({
  className,
  name,
  onChange,
  options = [],
  value,
}: Props) => (
  <div className={cx('bb', className)}>
    <select
      className={cx('bg-transparent bn pointer', className)}
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
  </div>
)

export default SelectInput
