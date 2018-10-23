// @flow
import cx from 'classnames'
import * as React from 'react'

type Props = {
  className?: string,
  name: number,
  onChange: Function,
  options: Array<{index: number, text: string}>,
  setRef: Function,
  style: Object,
  value?: {index: number, text: string},
}
class SelectInput extends React.PureComponent<Props> {
  setRef = (ref) => {
    const {name, setRef} = this.props
    if (setRef) {
      setRef(ref, name)
    }
  }

  render() {
    const {className, name, onChange, options = [], style, value} = this.props
    return (
      <div className={cx('bb', className)} ref={this.setRef}>
        <select
          className={cx('bg-transparent bn pointer', className)}
          name={name}
          onChange={onChange}
          style={style}
          value={value ? value.index : ''}
        >
          <option value="" />
          {value !== undefined && (
            <option value={value.index}>{value.text}</option>
          )}
          {options.map(({index, text}) => (
            <option key={index} value={index}>
              {text}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default SelectInput
