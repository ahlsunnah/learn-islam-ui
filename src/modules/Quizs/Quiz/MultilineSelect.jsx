// @flow
import cx from 'classnames'
import * as React from 'react'
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
      className={cx('pa2', {
        'w-95-ns w-90': !props.finished,
        'w-100': props.finished,
        red: props.finished && !props.isCorrect,
      })}
    >
      {props.value && props.value.text}
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
