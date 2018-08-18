// @flow
import cx from 'classnames'
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
import SelectInput from './SelectInput'

type DisplayAnswerProps = {
  answer?: string,
  answerIndex?: number,
  index: number,
  value: string,
}
const DisplayAnswer = ({
  answer,
  answerIndex,
  index,
  value,
}: DisplayAnswerProps) => {
  if (answerIndex === undefined) return <div className="green">{value}</div>
  if (answerIndex === index) return <div className="dark-blue">{value}</div>
  return (
    <div>
      <span className="dib dark-blue bt bw2 b--red lh0-9">{answer}</span>{' '}
      <div className="dib green"> {value}</div>
    </div>
  )
}

type Props = {
  data: {
    values: Array<string>,
  },
  handleAnswer: () => {},
  finished: boolean,
  number: number,
  orderedValues: Array<{index: number, text: string}>,
  remainingValues: Array<{index: number, text: string}>,
  score: number,
  state: {
    answers?: Array<?number>,
  },
  textParts: Array<string>,
  t: {
    fillInTheBlankTitle: string,
  },
}
const FillInTheBlank = ({
  data: {values},
  finished,
  handleAnswer,
  number,
  orderedValues,
  remainingValues,
  score,
  state: {answers = []},
  textParts,
  t: {fillInTheBlankTitle},
}: Props) => (
  <div>
    <div className="pb2 flex bb items-center">
      <div className="flex-no-shrink mr2 b">{number} -&nbsp;</div>
      <div className="f4 b">{fillInTheBlankTitle}</div>
    </div>
    <div className="mt3 mb0 f4">
      {textParts.map(
        (part, i) =>
          i === 0 ? (
            <span key={`part${i}`} className="lh1-75rem">
              {part}
            </span> // eslint-disable-line react/no-array-index-key
          ) : (
            [
              <div
                className="dib"
                key={`value${i - 1}`}
                //   className="bg-light-green"
              >
                {finished ? (
                  <DisplayAnswer
                    answer={
                      answers[i - 1] !== undefined ? values[answers[i - 1]] : ''
                    }
                    answerIndex={answers[i - 1]}
                    index={i - 1}
                    value={values[i - 1]}
                  />
                ) : (
                  <SelectInput
                    name={i - 1}
                    onChange={handleAnswer}
                    options={remainingValues}
                    value={orderedValues.find(
                      ({index}) => index === answers[i - 1],
                    )}
                  />
                )}
              </div>,
              <span key={`part${i}`} className="lh1-75rem">
                {part}
              </span>, // eslint-disable-line react/no-array-index-key
            ]
          ),
      )}
    </div>
    {finished && (
      <div
        className={cx('fr mt3 f3', {
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
  setPropTypes({
    addData: PropTypes.func.isRequired,
    data: PropTypes.shape({
      text: PropTypes.string.isRequired,
      values: PropTypes.array.isRequired,
    }).isRequired,
  }),
  withPropsOnChange(['data'], ({data: {text, values}}) => ({
    orderedValues: values
      .map((value, index) => ({index, text: value}))
      .sort((a, b) => (a.text > b.text ? 1 : -1)),
    textParts: text.split('##'),
  })),
  lifecycle({
    componentDidMount() {
      const {addData, orderedValues, quizId, state} = this.props
      if (!state.answers)
        addData({
          data: {
            answers: new Array(orderedValues.length).fill(undefined),
          },
          quizId,
        })
    },
  }),
  withHandlers({
    handleAnswer: ({addData, quizId, state: {answers}}) => (e) => {
      const {name, value} = e.target
      const newAnswers = answers.slice()
      newAnswers[name] = value !== '' ? parseInt(value, 10) : undefined
      addData({
        data: {
          answers: newAnswers,
        },
        quizId,
        started: true,
      })
    },
  }),
  withPropsOnChange(['state'], ({orderedValues, state: {answers = []}}) => {
    const notChosen = ({index}) => !answers.includes(index)
    return {
      remainingValues: orderedValues.filter(notChosen),
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
export default enhance(FillInTheBlank)
