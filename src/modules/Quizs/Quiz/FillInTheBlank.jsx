// @flow
import PropTypes from 'prop-types'
import * as React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'
import {
  compose,
  setPropTypes,
  withPropsOnChange,
  withStateHandlers,
} from 'recompose'
import SelectInput from './SelectInput'

type Props = {
  handleChange: () => {},
  inputValues: {[string]: string},
  number: number,
  remainingValues: Array<string>,
  textParts: Array<string>,
}
const FillInTheBlank = ({
  handleChange,
  inputValues,
  number,
  remainingValues,
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
                {/* {values[i - 1] || '..........'} */}
                <SelectInput
                  name={`input-${i - 1}`}
                  onChange={handleChange}
                  options={remainingValues}
                  value={inputValues[`input-${i - 1}`]}
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
    data: PropTypes.shape({
      text: PropTypes.string.isRequired,
      values: PropTypes.array.isRequired,
    }).isRequired,
  }),
  withPropsOnChange(['data'], ({data: {text, values}}) => ({
    orderedValues: values.slice().sort(),
    textParts: text.split('##'),
  })),
  withStateHandlers(
    ({orderedValues}) => ({
      inputValues: orderedValues.reduce((acc, _, index) => {
        acc[`input-${index}`] = ''
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
  withPropsOnChange(['inputValues'], ({inputValues, orderedValues}) => {
    const inputValuesValues = Object.values(inputValues)
    const notChosen = (val) => !inputValuesValues.includes(val)
    return {
      remainingValues: orderedValues.filter(notChosen),
    }
  }),
)
export default enhance(FillInTheBlank)
