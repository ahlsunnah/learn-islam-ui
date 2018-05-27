// @flow
import * as React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'
import {compose, withPropsOnChange, withStateHandlers} from 'recompose'
import RadioButton from './RadioButton'

type Props = {
  categories: Array<string>,
  handleChange: () => {},
  inputValues: {[string]: string},
  items: Array<string>,
  number: number,
}
const ChooseACategory = ({
  categories,
  handleChange,
  inputValues,
  items,
  number,
}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div className="mv0 f4">
      {items.map((item, i) => (
        <div className="pb4 flex-ns justify-between items-start" key={item}>
          <div>{item}</div>
          {categories.map((category, j) => (
            <RadioButton
              key={category}
              checked={inputValues[item] === category}
              id={`radio${i}-${j}`}
              name={item}
              onChange={handleChange}
              value={category}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
)

const enhance = compose(
  // TODO shuffle on mount
  withPropsOnChange(['data'], ({data}) => ({
    categories: data.values.map(({name}) => name),
    items: data.values.reduce((acc, {items}) => acc.concat(items), []),
  })),
  withStateHandlers(
    ({items}) => ({
      inputValues: items.reduce((acc, item) => {
        acc[item] = ''
        return acc
      }, {}),
    }),
    {
      handleChange: ({inputValues}) => (e) => {
        const {name: item, value: category} = e.target
        return {
          inputValues: {
            ...inputValues,
            [item]: category,
          },
        }
      },
    },
  ),
  //   withPropsOnChange(['inputValues'], ({inputValues, rightValues}) => {
  //     const inputValuesValues = Object.values(inputValues)
  //     const notChosen = (val) => !inputValuesValues.includes(val)
  //     return {
  //       remainingValues: rightValues.filter(notChosen),
  //     }
  //   }),
)
export default enhance(ChooseACategory)
