// @flow
import cx from 'classnames'
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
import addScoreWhenFinished from './addScoreWhenFinished'
import RadioButton from './RadioButton'
import ResultIndicator from './ResultIndicator'

type Props = {
  categories: Array<string>,
  data: {
    values: Array<{
      items: Array<string>,
    }>,
  },
  finished: boolean,
  handleAnswer: () => {},
  items: Array<string>,
  itemsOrder: Array<number>,
  number: number,
  score: number,
  state: {
    answers?: Array,
  },
}
const ChooseACategory = ({
  categories,
  data: {values},
  finished,
  handleAnswer,
  items,
  itemsOrder,
  number,
  score,
  state: {answers = []},
}: Props) => (
  <div>
    <div className="flex">
      <div className="flex-no-shrink mr2">
        {number} <ArrowForward className="dark-gray" />
      </div>
      <div>Title</div>
    </div>
    <div className="mt3 f4">
      {itemsOrder.map((itemIndex) => {
        const item = items[itemIndex]
        const answer = answers[itemIndex] // category
        const isCorrect =
          answer !== undefined && values[answer].items.includes(item)
        return (
          <div className="pb4 flex" key={itemIndex}>
            <ResultIndicator
              finished={finished}
              isCorrect={isCorrect}
              selected={answer !== undefined}
            />
            <div>
              <div>{item}</div>
              <div>
                {categories.map((category, categoryIndex) => (
                  <RadioButton
                    key={categoryIndex}
                    checked={answer === categoryIndex}
                    error={finished && !isCorrect && answer === categoryIndex}
                    greenChecked={
                      finished &&
                      !isCorrect &&
                      values[categoryIndex].items.includes(item)
                    }
                    id={`radio${category}-${item}`}
                    name={itemIndex}
                    onChange={handleAnswer}
                    value={categoryIndex}
                  >
                    {category}
                  </RadioButton>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
    {finished && (
      <div
        className={cx('fr mt3 f3', {
          green: score > itemsOrder.length / 2,
          red: score <= itemsOrder.length / 2,
        })}
      >
        {score}/{itemsOrder.length}
      </div>
    )}
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
            answers: new Array(items.length).fill(undefined),
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
  withPropsOnChange(
    ['finished'],
    ({data: {values}, finished, items, state: {answers}}) => {
      if (!finished) {
        return {score: 0}
      }
      return {
        score: answers.reduce((acc, chosenCat, index) => {
          if (
            chosenCat !== undefined &&
            values[chosenCat].items.includes(items[index])
          )
            return acc + 1
          return acc
        }, 0),
      }
    },
  ),
  addScoreWhenFinished,
)
export default enhance(ChooseACategory)
