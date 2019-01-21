import PropTypes from 'prop-types'
import * as React from 'react'
import {compose, setPropTypes, withPropsOnChange} from 'recompose'
import Progress from './Progress'

interface Props {
  percent: number
  progressText: string
}
class ProgressWrapper extends React.Component<Props> {
  render() {
    const {percent, progressText} = this.props
    return (
      <div>
        <span className="pt2 f6">
          {progressText} {percent}%
        </span>
        <Progress className="mv2" progress={percent} />
      </div>
    )
  }
}

const enhance = compose(
  setPropTypes({
    quizsState: PropTypes.object.isRequired,
    totalQuestions: PropTypes.number.isRequired,
  }),
  withPropsOnChange(['quizsState'], ({quizsState, totalQuestions = 1}) => {
    const questionsAnswered = quizsState.quizsIds.reduce(
      (acc: number, quizId: string) => {
        if (
          !quizsState[quizId] ||
          (quizsState[quizId].answer === undefined &&
            !quizsState[quizId].answers)
        ) {
          return acc
        }
        const {answers} = quizsState[quizId]
        if (Array.isArray(answers)) {
          return (
            acc +
            answers.reduce((sum, item) => {
              if (item !== undefined && item !== null) return sum + 1
              return sum
            }, 0)
          )
        }
        return acc + 1
      },
      0,
    )
    return {
      percent: Math.round((100 * questionsAnswered) / totalQuestions),
    }
  }),
)
export default enhance(ProgressWrapper)
