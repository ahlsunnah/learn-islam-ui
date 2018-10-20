// @flow
import cx from 'classnames'
import * as React from 'react'
import Correct from 'react-icons/lib/md/check'
import {withHandlers} from 'recompose'
import Select from 'react-select'
import Error from 'react-icons/lib/md/do-not-disturb-alt'

type Props = {
  chooseAnswerString: string,
  correctAnswer: string,
  finished: boolean,
  isCorrect: boolean,
  isRtl: boolean,
  onChange: Function,
  value?: {
    label: string,
    value: number,
  },
  options: Array<{
    label: string,
    value: number,
  }>,
}

const MultilineSelect = (props: Props) => {
  return (
    <div className="relative w-100">
      {props.finished && (
        <div
          className={cx('pa2 dark-blue ba br2 b--dark-gray', {
            'w-95-ns w-90': !props.finished,
            'w-100': props.finished,
          })}
        >
          <div className="flex items-center">
            {props.isCorrect ? (
              <Correct className="flex-no-shrink dn dib-ns f2 green" />
            ) : (
              props.value && (
                <Error className="flex-no-shrink dn dib-ns mh2 red" />
              )
            )}

            {props.value && props.value.label}
          </div>
          {!props.isCorrect && (
            <div className="green">{props.correctAnswer}</div>
          )}
        </div>
      )}
      {!props.finished && (
        <Select
          isClearable
          isRtl={props.isRtl}
          onChange={props.onChange}
          styles={{
            input: (styles) => {
              if (props.value)
                return {
                  ...styles,
                  position: 'absolute',
                }
              return styles
            },
            singleValue: (styles) => {
              return {
                color: styles.color,
                marginLeft: styles.marginLeft,
                marginRight: styles.marginRight,
                // maxWidth: styles.maxWidth,
              }
            },
          }}
          value={props.value}
          options={props.options}
          placeholder={props.chooseAnswerString}
        />
      )}
    </div>
  )
}

const enhance = withHandlers({
  onChange: ({name, onChange}) => (value, action) => {
    onChange(value, action, name)
  },
})
export default enhance(MultilineSelect)
