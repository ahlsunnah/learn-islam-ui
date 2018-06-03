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
import RadioButton from './RadioButton'

type Props = {
  categories: Array<string>,
  handleAnswer: () => {},
  items: Array<string>,
  itemsOrder: Array<number>,
  number: number,
  state: {
    answers?: Array,
  },
}
const ChooseACategory = ({
  categories,
  handleAnswer,
  items,
  itemsOrder,
  number,
  state: {answers = []},
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
            {categories.map((category, categoryIndex) => (
              <RadioButton
                key={categoryIndex}
                checked={answers[itemIndex] === categoryIndex}
                id={`radio${category}-${item}`}
                name={itemIndex}
                onChange={handleAnswer}
                value={categoryIndex}
              >
                {category}
              </RadioButton>
            ))}
          </div>
        )
      })}
    </div>
  </div>
)

const enhance = compose(
  // Separate the data
  withPropsOnChange(['data'], ({data}) => ({
    categories: data.values.map(({name}) => name),
    items: data.values.reduce((acc, {items}) => acc.concat(items), []),
  })),

  // shuffle the items
  setPropTypes({
    addData: PropTypes.func.isRequired,
    quizId: PropTypes.string.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      const {items, addData, quizId, state} = this.props
      if (!state.valuesOrder)
        addData({
          data: {
            answers: new Array(items.length),
            itemsOrder: shuffle(items.map((_, i) => i)),
          },
          quizId,
        })
    },
  }),
  withHandlers({
    handleAnswer: ({addData, quizId, state: {answers}}) => (e) => {
      const {name: item, value: category} = e.target
      const newAnswer = answers.slice()
      newAnswer[item] = parseInt(category, 10)
      addData({
        data: {
          answers: newAnswer,
        },
        quizId,
      })
    },
  }),
  withPropsOnChange(['state'], ({items, state: {itemsOrder}}) => ({
    itemsOrder: itemsOrder || items.map((_, i) => i), // default values for SSR
  })),
)
export default enhance(ChooseACategory)
