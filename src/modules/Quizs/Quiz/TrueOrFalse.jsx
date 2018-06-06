// @flow
import cx from 'classnames'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import * as React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'
import {compose, setPropTypes, withHandlers} from 'recompose'

type Props = {
  data: {
    // isTrue: boolean,
    text: string,
  },
  handleAnswer: Function,
  number: number,
  state: {
    answer?: boolean,
  },
  t: {
    quizFalse: string,
    quizTrue: string,
  },
}
const TrueOrFalse = ({
  data: {text},
  handleAnswer,
  number,
  state: {answer},
  t,
}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div>
      <div className="f4">{text}</div>
      <div className="mt4">
        <div className="mt2">
          <Button
            className={cx({
              ph3: answer,
            })}
            name="true"
            onClick={handleAnswer}
            rounded
            secondary
            stroked={answer === false}
          >
            {t.quizTrue}
          </Button>
        </div>
        <div className="mt2">
          <Button
            className={cx({
              ph3: answer === false,
            })}
            name="false"
            onClick={handleAnswer}
            rounded
            secondary
            stroked={answer}
          >
            {t.quizFalse}
          </Button>
        </div>
      </div>
    </div>
  </div>
)

const enhance = compose(
  setPropTypes({
    addData: PropTypes.func.isRequired,
    quizId: PropTypes.string.isRequired,
  }),
  withHandlers({
    handleAnswer: ({addData, quizId}) => (e) => {
      addData({
        data: {
          answer: e.target.name === 'true',
        },
        quizId,
      })
    },
  }),
)
export default enhance(TrueOrFalse)
