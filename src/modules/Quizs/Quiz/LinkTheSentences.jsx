// @flow
import {addData} from 'actions/quizs'
import shuffle from 'lib/shuffle'
import PropTypes from 'prop-types'
import * as React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'
import {connect} from 'react-redux'
import {
  compose,
  lifecycle,
  setPropTypes,
  withPropsOnChange,
  withStateHandlers,
} from 'recompose'
import SelectInput from './SelectInput'

type Props = {
  handleChange: () => {},
  leftValues: Array<string>,
  inputValues: {[string]: string},
  number: number,
  remainingValues: Array<string>,
  valuesOrder: Array<number>,
}
const LinkTheSentences = ({
  handleChange,
  leftValues,
  inputValues,
  number,
  remainingValues,
  valuesOrder,
}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div className="mv0 f4">
      {valuesOrder.map((valueIndex) => {
        const leftValue = leftValues[valueIndex]
        return (
          <div
            className="pb4 flex-ns justify-between items-start"
            key={valueIndex}
            //   className="bg-light-green"
          >
            <div>{leftValue}</div>
            {/* {values[i - 1] || '..........'} */}
            <SelectInput
              name={leftValue}
              onChange={handleChange}
              options={remainingValues}
              value={inputValues[leftValue]}
            />
          </div>
        )
      })}
    </div>
  </div>
)

const enhance = compose(
  connect(undefined, {dAddData: addData}),
  withPropsOnChange(['data'], ({data: {values}}) => ({
    leftValues: values.map(({a}) => a),
    rightValues: values.map(({b}) => b).sort(),
  })),

  // Shuffle leftValues
  setPropTypes({
    dAddData: PropTypes.func.isRequired,
    leftValues: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired,
    quizId: PropTypes.string.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      const {leftValues, dAddData, params, quizId, state} = this.props
      if (!state.valuesOrder)
        dAddData({
          data: {
            valuesOrder: shuffle(leftValues.map((_, i) => i)),
          },
          params,
          quizId,
        })
    },
  }),
  withPropsOnChange(['state'], ({leftValues, state: {valuesOrder}}) => ({
    valuesOrder: valuesOrder || leftValues.map((_, i) => i), // default values for SSR
  })),

  // Handlers
  withStateHandlers(
    ({leftValues}) => ({
      inputValues: leftValues.reduce((acc, value) => {
        acc[value] = ''
        return acc
      }, {}),
    }),
    {
      handleChange: ({inputValues}) => (e) => {
        const {name, value} = e.target
        return {
          inputValues: {
            ...inputValues,
            [name]: value,
          },
        }
      },
    },
  ),

  // Remove already chosen values from rightValues
  withPropsOnChange(['inputValues'], ({inputValues, rightValues}) => {
    const inputValuesValues = Object.values(inputValues)
    const notChosen = (val) => !inputValuesValues.includes(val)
    return {
      remainingValues: rightValues.filter(notChosen),
    }
  }),
)
export default enhance(LinkTheSentences)
