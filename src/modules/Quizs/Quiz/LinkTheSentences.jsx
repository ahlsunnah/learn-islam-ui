// @flow
import * as React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'
import {compose, withPropsOnChange, withStateHandlers} from 'recompose'
import SelectInput from './SelectInput'

type Props = {
  handleChange: () => {},
  leftValues: Array<string>,
  inputValues: {[string]: string},
  number: number,
  remainingValues: Array<string>,
}
const LinkTheSentences = ({
  handleChange,
  leftValues,
  inputValues,
  number,
  remainingValues,
}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div className="mv0 f4">
      {leftValues.map((leftValue) => (
        <div
          className="pb4 flex-ns justify-between items-start"
          key={leftValue}
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
      ))}
    </div>
  </div>
)

const enhance = compose(
  // TODO shuffle on mount
  withPropsOnChange(['data'], ({data}) => ({
    leftValues: Object.keys(data),
    rightValues: Object.values(data).sort(),
  })),
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
  withPropsOnChange(['inputValues'], ({inputValues, rightValues}) => {
    const inputValuesValues = Object.values(inputValues)
    const notChosen = (val) => !inputValuesValues.includes(val)
    return {
      remainingValues: rightValues.filter(notChosen),
    }
  }),
)
export default enhance(LinkTheSentences)
