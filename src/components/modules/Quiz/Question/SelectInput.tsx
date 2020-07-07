import cx from 'classnames'
import React from 'react'
import { Question_Choices } from '../../../../hasuraTypes'
import { useField } from 'formik'

interface IProps {
  className?: string
  style?: React.CSSProperties
  name: string
  options: Pick<Question_Choices, 'id' | 'choice' | 'choice_order' | 'is_right_choice' | 'question_id'>[]
  index: number
  value?: string
}

// what is this?
// {value !== undefined && <option value={value}>{value}</option>}

function SelectInput(props: IProps) {
  const { className, options, style, value, ...rest } = props
  const [field] = useField(rest)

  return (
    <div className={cx('bb', className)}>
      <select className={cx('bg-transparent bn pointer', className)} style={style} {...field} {...rest}>
        <option value="" />
        {value !== undefined && <option value={value}>{value}</option>}
        {options.map((option) => (
          <option key={option.id} value={option.id as number}>
            {option.choice}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput
