// @flow
import {addData} from 'actions/quizs'
import Button from 'components/Button'
import shuffle from 'lib/shuffle'
import PropTypes from 'prop-types'
import * as React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'
import {connect} from 'react-redux'
import {compose, lifecycle, setPropTypes, withProps} from 'recompose'

type Props = {
  data: {
    text: string,
    values: Array<string>,
  },
  number: number,
  valuesOrder: Array<number>,
}
const Choose = ({data: {text, values}, number, valuesOrder}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div>
      <div className="f4">{text}</div>
      <div className="mt4">
        {valuesOrder.map((order) => (
          <div className="mt2" key={order}>
            <Button rounded secondary>
              {values[order]}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const enhance = compose(
  connect(undefined, {dAddData: addData}),
  setPropTypes({
    dAddData: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    quizId: PropTypes.string.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      const {
        data: {values},
        dAddData,
        params,
        quizId,
        state,
      } = this.props
      if (!state.valuesOrder)
        dAddData({
          data: {
            valuesOrder: shuffle(values.map((_, i) => i)),
          },
          params,
          quizId,
        })
    },
  }),
  withProps(({data: {values}, state: {valuesOrder}}) => ({
    valuesOrder: valuesOrder || values.map((_, i) => i), // default values for SSR
  })),
)
export default enhance(Choose)
