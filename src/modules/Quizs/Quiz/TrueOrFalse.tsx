import cx from 'classnames'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import * as React from 'react'
import {compose, setPropTypes, withHandlers, withPropsOnChange} from 'recompose'
import addScoreWhenFinished from './addScoreWhenFinished'
import ResultIndicator from './ResultIndicator'

interface IProps {
  data: {
    isTrue: boolean
    text: string
  }
  finished: boolean
  handleAnswer: () => void
  number: number
  score: number
  state: {
    answer?: boolean
  }
  t: {
    quizFalse: string
    quizTrue: string
    locale: string
  }
}
const TrueOrFalse = ({
  data: {isTrue, text},
  finished,
  handleAnswer,
  number,
  score,
  state: {answer},
  t: {quizFalse, quizTrue, locale},
}: IProps): JSX.Element => {
  return (
    <div>
      <div className="flex">
        <div className="flex-no-shrink w2-5 b">{number} -</div>
        <div className="f4 b">{text}</div>
      </div>
      <div className="mt4 flex justify-between">
        <div>
          <div className="mt2">
            <ResultIndicator
              finished={finished}
              isCorrect={isTrue}
              selected={answer === true}
            />
            <Button
              greenOutlined={finished && isTrue && answer !== true}
              name="true"
              onClick={handleAnswer}
              rounded
              raised={answer === true}
              outlined={answer !== true}
            >
              {quizTrue}
            </Button>
          </div>
          <div className="mt2">
            <ResultIndicator
              finished={finished}
              isCorrect={!isTrue}
              selected={answer === false}
            />
            <Button
              className={cx({
                ph3: answer === false,
              })}
              greenOutlined={finished && !isTrue && answer !== false}
              name="false"
              onClick={handleAnswer}
              rounded
              raised={answer === false}
              outlined={answer !== false}
            >
              {quizFalse}
            </Button>
          </div>
        </div>
        {finished &&
          (score ? (
            <div
              className={cx('self-end green f3', {
                tl: locale === 'ar',
                tr: locale !== 'ar',
              })}
            >
              1/1
            </div>
          ) : (
            <div
              className={cx('self-end green f3', {
                tl: locale === 'ar',
                tr: locale !== 'ar',
              })}
            >
              0/1
            </div>
          ))}
      </div>
    </div>
  )
}

const enhance = compose(
  setPropTypes({
    addData: PropTypes.func.isRequired,
    addScore: PropTypes.func.isRequired,
    finished: PropTypes.bool.isRequired,
    quizId: PropTypes.string.isRequired,
  }),
  // @ts-ignore
  withHandlers({
    // @ts-ignore
    handleAnswer: ({addData, finished, quizId, state: {answer}}) => (e) => {
      const newAnswer = e.currentTarget.name === 'true'
      if (!finished)
        addData({
          data: {
            answer: answer === newAnswer ? undefined : newAnswer,
          },
          quizId,
          started: true,
        })
    },
  }),
  withPropsOnChange(
    ['finished'],
    // @ts-ignore
    ({data: {isTrue}, finished, state: {answer}}) => {
      if (!finished) {
        return {score: 0}
      }
      return {
        score: answer === isTrue ? 1 : 0,
      }
    },
  ),
  addScoreWhenFinished,
)
// @ts-ignore
export default enhance(TrueOrFalse)
