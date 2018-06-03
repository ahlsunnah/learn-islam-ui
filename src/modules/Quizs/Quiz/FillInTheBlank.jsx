// @flow
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
  number: number,
  orderedValues: Array<{index: number, text: string}>,
  remainingValues: Array<{index: number, text: string}>,
  state: {
    answers?: Array,
  },
  textParts: Array<string>,
}
const FillInTheBlank = ({
  handleAnswer,
  number,
  orderedValues,
  remainingValues,
  state: {answers = []},
  textParts,
}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div className="mv0 f4">
      {textParts.map(
        (part, i) =>
          i === 0 ? (
            <span key={`part${i}`}>{part}</span> // eslint-disable-line react/no-array-index-key
          ) : (
            [
              <div
                className="dib"
                key={`value${i - 1}`}
                //   className="bg-light-green"
              >
                <SelectInput
                  name={i - 1}
                  onChange={handleAnswer}
                  options={remainingValues}
                  value={orderedValues.find(
                    ({index}) => index === answers[i - 1],
                  )}
                />
              </div>,
              <span key={`part${i}`}>{part}</span>, // eslint-disable-line react/no-array-index-key
            ]
          ),
      )}
    </div>
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
            answers: new Array(orderedValues.length),
          },
          quizId,
        })
    },
  }),
  withHandlers({
    handleAnswer: ({addData, quizId, state: {answers}}) => (e) => {
      const {name, value} = e.target
      const newAnswers = answers.slice()
      newAnswers[name] = parseInt(value, 10)
      addData({
        data: {
          answers: newAnswers,
        },
        quizId,
      })
    },
  }),
  withPropsOnChange(['state'], ({orderedValues, state: {answers = []}}) => {
    const notChosen = ({index}) => !answers.includes(index)
    return {
      remainingValues: orderedValues.filter(notChosen),
    }
  }),
)
export default enhance(FillInTheBlank)
