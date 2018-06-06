// @flow
import cx from 'classnames'
import Button from 'components/Button'
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

type Props = {
  data: {
    text: string,
    values: Array<string>,
  },
  handleAnswer: Function,
  number: number,
  state: {
    answer?: number,
  },
  valuesOrder: Array<number>,
}
const Choose = ({
  data: {text, values},
  handleAnswer,
  number,
  state: {answer},
  valuesOrder,
}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div>
      <div className="f4">{text}</div>
      <div className="mt4">
        {valuesOrder.map((order) => (
          <div className="mt2" key={order}>
            <Button
              className={cx({
                ph3: order === answer,
              })}
              rounded
              secondary
              stroked={order !== answer}
              onClick={handleAnswer}
              name={order}
            >
              {values[order]}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const enhance = compose(
  setPropTypes({
    addData: PropTypes.func.isRequired,
    quizId: PropTypes.string.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      const {
        data: {values},
        addData,
        state,
        quizId,
      } = this.props
      if (!state.valuesOrder)
        addData({
          data: {
            valuesOrder: shuffle(values.map((_, i) => i)),
          },
          quizId,
        })
    },
  }),
  withPropsOnChange(['state'], ({data: {values}, state: {valuesOrder}}) => ({
    valuesOrder: valuesOrder || values.map((_, i) => i), // default values for SSR
  })),
  withHandlers({
    handleAnswer: ({addData, quizId}) => (e) => {
      addData({
        data: {
          answer: parseInt(e.target.name, 10),
        },
        quizId,
      })
    },
  }),
)
export default enhance(Choose)
