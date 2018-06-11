// @flow
import cx from 'classnames'
import Button from 'components/Button'
import shuffle from 'lib/shuffle'
import PropTypes from 'prop-types'
import * as React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'
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
}
const Choose = ({
  data: {text, values},
  finished,
  handleAnswer,
  number,
  score,
  state: {answer},
  valuesOrder,
}: Props) => (
  <div>
    <div className="flex">
      <div className="flex-no-shrink w2-5">
        {number} <ArrowForward className="dark-gray" />
      </div>
      <div className="f4">{text}</div>
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
        <div className="fr mt3 green f3">1/1</div>
      ) : (
        <div className="fr mt3 red f3">0/1</div>
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
    handleAnswer: ({addData, finished, quizId}) => (e) => {
      if (!finished)
        addData({
          data: {
            answer: parseInt(e.target.name, 10),
          },
          quizId,
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
