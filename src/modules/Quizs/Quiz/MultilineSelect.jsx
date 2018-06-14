// @flow
import cx from 'classnames'
import * as React from 'react'
import Correct from 'react-icons/lib/md/check'
import Error from 'react-icons/lib/md/clear'
import {withStateHandlers} from 'recompose'
import SelectInput from './SelectInput'

type Props = {
  correctAnswer: string,
  finished: boolean,
  isCorrect: boolean,
  isOpen: boolean,
  open: Function,
  value?: {
    index: number,
    text: string,
  },
}
const MultilineSelect = (props: Props) => (
  <div className="relative w-100 m-h-3 ba br2 b--dark-gray">
    <div
      className={cx('pa2 dark-blue', {
        'w-95-ns w-90': !props.finished,
        'w-100': props.finished,
      })}
    >
      <div className="flex items-center">
        {props.finished &&
          (props.isCorrect ? (
            <Correct className="flex-no-shrink dn dib-ns f2 green" />
          ) : (
            props.value && <Error className="flex-no-shrink dn dib-ns f2 red" />
          ))}

        {props.value && props.value.text}
      </div>
      {props.finished &&
        !props.isCorrect && <div className="green">{props.correctAnswer}</div>}
    </div>
    {!props.finished && (
      <div className="arrow-down absolute right-1 center-absolute-v" />
    )}
    {!props.finished && (
      <SelectInput
        {...props}
        className={cx('absolute absolute--fill', {
          'o-025': !props.isOpen,
        })}
        onClick={props.open}
      />
    )}
  </div>
)

const enhance = withStateHandlers(
  {isOpen: false},
  {
    open: ({isOpen}) => () => ({
      isOpen: !isOpen,
    }),
  },
)
export default enhance(MultilineSelect)
