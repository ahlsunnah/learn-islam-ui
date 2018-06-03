// @flow
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
import SelectInput from './SelectInput'

type Props = {
  handleAnswer: () => {},
  leftValues: Array<string>,
  number: number,
  remainingValues: Array<{index: number, text: string}>,
  rightValues: Array<{index: number, text: string}>,
  state: {
    answers?: Array,
  },
  valuesOrder: Array<number>,
}
const LinkTheSentences = ({
  handleAnswer,
  leftValues,
  number,
  remainingValues,
  rightValues,
  state: {answers = []},
  valuesOrder,
}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div className="mv0 f4">
      {valuesOrder.map((valueIndex) => {
        const leftValue = leftValues[valueIndex]
        const rightValue = rightValues.find(
          ({index}) => answers[valueIndex] === index,
        )
        return (
          <div
            className="pb4 flex-ns justify-between items-start"
            key={valueIndex}
          >
            <div>{leftValue}</div>
            <SelectInput
              name={valueIndex}
              onChange={handleAnswer}
              options={remainingValues}
              value={rightValue}
            />
          </div>
        )
      })}
    </div>
  </div>
)

const enhance = compose(
  withPropsOnChange(['data'], ({data: {values}}) => ({
    leftValues: values.map(({a}) => a),
    rightValues: values
      .map(({b}, index) => ({index, text: b}))
      .sort((a, b) => (a.text > b.text ? 1 : -1)),
  })),

  // Shuffle leftValues
  setPropTypes({
    addData: PropTypes.func.isRequired,
    leftValues: PropTypes.array.isRequired,
    quizId: PropTypes.string.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      const {leftValues, addData, quizId, state} = this.props
      if (!state.valuesOrder)
        addData({
          data: {
            answers: new Array(leftValues.length),
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
    handleAnswer: ({addData, quizId, state: {answers}}) => (e) => {
      const {name, value} = e.target
      const newAnswers = answers.slice()
      newAnswers[name] = value !== '' ? parseInt(value, 10) : undefined
      addData({
        data: {
          answers: newAnswers,
        },
        quizId,
      })
    },
  }),

  // Remove already chosen values from rightValues
  withPropsOnChange(['state'], ({rightValues, state: {answers = []}}) => {
    const notChosen = ({index}) => !answers.includes(index)
    return {
      remainingValues: rightValues.filter(notChosen),
    }
  }),
)
export default enhance(LinkTheSentences)
