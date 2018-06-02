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
import RadioButton from './RadioButton'

type Props = {
  categories: Array<string>,
  handleChange: () => {},
  inputValues: {[string]: string},
  items: Array<string>,
  itemsOrder: Array<number>,
  number: number,
}
const ChooseACategory = ({
  categories,
  handleChange,
  inputValues,
  items,
  itemsOrder,
  number,
}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div className="mv0 f4">
      {itemsOrder.map((itemIndex) => {
        const item = items[itemIndex]
        return (
          <div
            className="pb4 flex-ns justify-between items-start"
            key={itemIndex}
          >
            <div>{item}</div>
            {categories.map((category, j) => (
              <RadioButton
                key={category}
                checked={inputValues[item] === category}
                id={`radio${itemIndex}-${j}`}
                name={item}
                onChange={handleChange}
                value={category}
              />
            ))}
          </div>
        )
      })}
    </div>
  </div>
)

const enhance = compose(
  connect(undefined, {dAddData: addData}),

  // Separate the data
  withPropsOnChange(['data'], ({data}) => ({
    categories: data.values.map(({name}) => name),
    items: data.values.reduce((acc, {items}) => acc.concat(items), []),
  })),

  // shuffle the items
  setPropTypes({
    dAddData: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    quizId: PropTypes.string.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      const {items, dAddData, params, quizId, state} = this.props
      if (!state.valuesOrder)
        dAddData({
          data: {
            itemsOrder: shuffle(items.map((_, i) => i)),
          },
          params,
          quizId,
        })
    },
  }),
  withPropsOnChange(['state'], ({items, state: {itemsOrder}}) => ({
    itemsOrder: itemsOrder || items.map((_, i) => i), // default values for SSR
  })),

  // Define handlers
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
)
export default enhance(ChooseACategory)
