// @flow
import cx from 'classnames'
import Button from 'components/Button'
import shuffle from 'lib/shuffle'
import PropTypes from 'prop-types'
import * as React from 'react'
import {
  compose,
  lifecycle,
  setPropTypes,
  withHandlers,
  withPropsOnChange,
} from 'recompose'
import addScoreWhenFinished from './addScoreWhenFinished'
import ResultIndicator from './ResultIndicator'

type Props = {
  data: {
    text: string,
    values: Array<string>,
  },
  finished: boolean,
  handleAnswer: Function,
  number: number,
  score: number,
  state: {
    answer?: number,
  },
  valuesOrder: Array<number>,
  t: {
    locale: string,
  },
}
const Choose = ({
  data: {text, values},
  finished,
  handleAnswer,
  number,
  score,
  state: {answer},
  valuesOrder,
  t: {locale},
}: Props) => (
  <div>
    <div className="flex">
      <div className="flex-no-shrink w2-5 b">{number} -</div>
      <div className="f4 b">{text}</div>
    </div>
    <div className="mt4">
      {valuesOrder.map((order) => (
        <div className="mt2 flex items-center" key={order}>
          <ResultIndicator
            finished={finished}
            isCorrect={order === 0}
            selected={answer === order}
          />
          <Button
            className={cx('pv2 h-auto lh-title tl', {
              ph3: order === answer,
            })}
            greenStroked={finished && order === 0 && answer !== order}
            secondary
            stroked={order !== answer}
            onClick={handleAnswer}
            name={order}
          >
            {values[order]}
          </Button>
        </div>
      ))}
    </div>
    {finished &&
      (score ? (
        <div
          className={cx('mt3 green f3', {
            tl: locale === 'ar',
            tr: locale !== 'ar',
          })}
        >
          1/1
        </div>
      ) : (
        <div
          className={cx('mt3 green f3', {
            tl: locale === 'ar',
            tr: locale !== 'ar',
          })}
        >
          0/1
        </div>
      ))}
  </div>
)

const enhance = compose(
  setPropTypes({
    addData: PropTypes.func.isRequired,
    addScore: PropTypes.func.isRequired,
    quizId: PropTypes.string.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      const {
        data: {values},
        addData,
        state,
        quizId,
      } = this.props
      if (!state.valuesOrder)
        addData({
          data: {
            valuesOrder: shuffle(values.map((_, i) => i)),
          },
          quizId,
        })
    },
  }),
  withPropsOnChange(['state'], ({data: {values}, state: {valuesOrder}}) => ({
    valuesOrder: valuesOrder || values.map((_, i) => i), // default values for SSR
  })),
  withHandlers({
    handleAnswer: ({addData, finished, quizId, state: {answer}}) => (e) => {
      const newAnswer = parseInt(e.target.name, 10)
      if (!finished)
        addData({
          data: {
            answer: answer === newAnswer ? undefined : newAnswer,
          },
          quizId,
          started: true,
        })
    },
  }),
  withPropsOnChange(['finished'], ({finished, state: {answer}}) => {
    if (!finished) {
      return {score: 0}
    }
    return {
      score: answer === 0 ? 1 : 0,
    }
  }),
  addScoreWhenFinished,
)
export default enhance(Choose)
