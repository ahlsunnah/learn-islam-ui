import cx from 'classnames'
import React from 'react'
import Correct from 'react-icons/lib/md/check'
import Select, {ValueType, ActionMeta} from 'react-select'
import Error from 'react-icons/lib/md/do-not-disturb-alt'

type SelectOnChange = (
  value: ValueType<{
    label: string
    value: string
  }>,
  actionMeta: ActionMeta,
) => void

interface IProps {
  chooseAnswerString: string
  correctAnswer: string
  finished: boolean
  isCorrect: boolean
  isRtl: boolean
  onChange: (name: string, value?: string) => void
  value?: string
  options: string[]
  name: string
}

const MultilineSelect = ({
  finished,
  isCorrect,
  value,
  correctAnswer,
  isRtl,
  onChange,
  options,
  chooseAnswerString,
  name,
}: IProps) => {
  const handleChange: SelectOnChange = (option) => {
    if (!option) {
      onChange(name, undefined)
      return
    }
    if ('value' in option) {
      // We don't handle selecting multiple values
      const {value} = option
      onChange(name, value)
    }
  }
  return (
    <div className="relative w-100">
      {finished && (
        <div
          className={cx('pa2 dark-blue ba br2 b--dark-gray', {
            'w-95-ns w-90': !finished,
            'w-100': finished,
          })}
        >
          <div className="flex items-center">
            {isCorrect ? (
              <Correct className="flex-no-shrink dn dib-ns f2 green" />
            ) : (
              value && <Error className="flex-no-shrink dn dib-ns mh2 red" />
            )}

            {value}
          </div>
          {!isCorrect && <div className="green">{correctAnswer}</div>}
        </div>
      )}
      {!finished && (
        <Select
          isClearable
          isRtl={isRtl}
          onChange={handleChange}
          isSearchable={false}
          styles={{
            singleValue: (styles) => {
              return {
                color: styles.color,
                marginLeft: styles.marginLeft,
                marginRight: styles.marginRight,
                // maxWidth: styles.maxWidth,
              }
            },
          }}
          value={value ? {label: value, value} : undefined}
          options={options.map((value) => ({label: value, value}))}
          placeholder={chooseAnswerString}
        />
      )}
    </div>
  )
}

export default MultilineSelect
