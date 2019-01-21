import cx from 'classnames'
import shuffle from 'lib/shuffle'
import PropTypes from 'prop-types'
import * as React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'
import Correct from 'react-icons/lib/md/check'
import {
  compose,
  lifecycle,
  setPropTypes,
  withHandlers,
  withPropsOnChange,
} from 'recompose'
import Error from 'react-icons/lib/md/do-not-disturb-alt'
import addScoreWhenFinished from './addScoreWhenFinished'
import MultilineSelect from './MultilineSelect'

interface Props {
  data: {
    title: string,
    values: Array<{
      a: string,
      b: string,
    }>,
  },
  finished: boolean,
  handleAnswer: () => {},
  leftValues: Array<string>,
  number: number,
  remainingValues: Array<{value: number, label: string}>,
  rightValues: Array<{value: number, label: string}>,
  score: number,
  state: {
    answers?: Array<?number>,
  },
  valuesOrder: Array<number>,
  t: {
    chooseAnswer: string,
    locale: string,
  },
}
const LinkTheSentences = ({
  data: {title, values},
  handleAnswer,
  finished,
  leftValues,
  number,
  remainingValues,
  rightValues,
  score,
  state: {answers = []},
  valuesOrder,
  t: {chooseAnswer, locale},
}: Props) => (
  <div>
    <div className="pb2 mb3 flex bb items-center">
      <div className="flex-no-shrink mr2 b">{number} -</div>
      <div className="f4 b">{title}</div>
    </div>
    <div className="mv0 f4">
      {valuesOrder.map((valueIndex, i) => {
        const leftValue = leftValues[valueIndex]
        const rightValue = rightValues.find(
          ({value}) => answers[valueIndex] === value,
        )
        const isCorrect = finished && answers[valueIndex] === valueIndex
        return (
          <div className="pb4" key={valueIndex}>
            {i !== 0 && <hr />}
            <div className="mt4">
              {i + 1}. {leftValue}
            </div>
            <div className="tc mb1 f2">
              {finished &&
                rightValue &&
                (isCorrect ? (
                  <Correct className="dn-ns green" />
                ) : (
                  <Error className="dn-ns red" />
                ))}
              <ArrowForward
                className={cx('moon-gray rotate-90 dib-ns', {
                  dn: finished && rightValue,
                })}
              />
            </div>
            <MultilineSelect
              correctAnswer={finished ? values[valueIndex].b : ''}
              chooseAnswerString={chooseAnswer}
              finished={finished}
              isRtl={locale === 'ar'}
              isCorrect={isCorrect}
              name={valueIndex}
              onChange={handleAnswer}
              options={remainingValues}
              value={rightValue}
            />
          </div>
        )
      })}
    </div>
    {finished && (
      <div
        className={cx('mt3 f3', {
          tl: locale === 'ar',
          tr: locale !== 'ar',
          green: score > answers.length / 2,
          red: score <= answers.length / 2,
        })}
      >
        {score}/{answers.length}
      </div>
    )}
  </div>
)

const enhance = compose(
  withPropsOnChange(['data'], ({data: {values}}) => {
    return {
      leftValues: values.map(({a}) => a),
      rightValues: values
        .map(({b}, index) => ({value: index, label: b}))
        .sort((a, b) => (a.label > b.label ? 1 : -1)),
    }
  }),

  // Shuffle leftValues
  setPropTypes({
    addData: PropTypes.func.isRequired,
    leftValues: PropTypes.array.isRequired,
    rightValues: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired,
    ),
    quizId: PropTypes.string.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      const {leftValues, addData, quizId, state} = this.props
      if (!state.valuesOrder)
        addData({
          data: {
            answers: new Array(leftValues.length).fill(undefined),
            // valuesOrder: leftValues.map((_, i) => i),
            valuesOrder: shuffle(leftValues.map((_, i) => i)),
          },
          quizId,
        })
    },
  }),
  withPropsOnChange(['state'], ({leftValues, state: {valuesOrder}}) => ({
    valuesOrder: valuesOrder || leftValues.map((_, i) => i), // default values for SSR
  })),

  withHandlers({
    handleAnswer: ({addData, quizId, state: {answers}}) => (
      event,
      action,
      name,
    ) => {
      const newAnswers = answers.slice()
      if (action.action === 'select-option') {
        const {value} = event
        newAnswers[name] = parseInt(value, 10)
      } else {
        newAnswers[name] = undefined
      }

      addData({
        data: {
          answers: newAnswers,
        },
        quizId,
        started: true,
      })
    },
  }),

  // Remove already chosen values from rightValues
  withPropsOnChange(['state'], ({rightValues, state: {answers = []}}) => {
    const notChosen = ({value}) => !answers.includes(value)
    return {
      remainingValues: rightValues.filter(notChosen),
    }
  }),

  withPropsOnChange(['finished'], ({finished, state: {answers = []}}) => {
    if (!finished) {
      return {score: 0}
    }
    return {
      score: answers.reduce((acc, answer, index) => {
        if (answer === index) return acc + 1
        return acc
      }, 0),
    }
  }),
  addScoreWhenFinished,
)
export default enhance(LinkTheSentences)
