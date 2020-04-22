import cx from 'classnames'
import React from 'react'

interface IProps {
  className?: string
  style?: React.CSSProperties
  name: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  setRef: (ref: HTMLDivElement, index: number) => void
  index: number
  value?: string
}
class SelectInput extends React.PureComponent<IProps> {
  setRef = (ref: HTMLDivElement | null) => {
    const { index, setRef } = this.props
    if (ref) {
      setRef(ref, index)
    }
  }

  render() {
    const { className, name, onChange, options, style, value } = this.props
    return (
      <div className={cx('bb', className)} ref={this.setRef}>
        <select
          className={cx('bg-transparent bn pointer', className)}
          name={name}
          onChange={onChange}
          style={style}
          value={value}
        >
          <option value="" />
          {value !== undefined && <option value={value}>{value}</option>}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default SelectInput
