// @flow
import {completeQuizs} from 'actions/quizs'
import Button from 'components/Button'
import Card from 'components/Card'
import Link from 'gatsby-link'
import scrollTo from 'lib/scrollTo'
import PropTypes from 'prop-types'
import * as React from 'react'
import {connect} from 'react-redux'
import {
  branch,
  compose,
  lifecycle,
  renderNothing,
  setPropTypes,
} from 'recompose'
import ProgressWrapper from './ProgressWrapper'

type Props = {
  chapterPathname: string,
  quizsState: {
    finished: boolean,
    lastScore?: number,
  },
  submit: Function,
  totalQuestions: number,
}
const QuizFooter = ({
  chapterPathname,
  quizsState,
  submit,
  totalQuestions,
}: Props) => (
  <div className="h4">
    <Card className="ph4 pt4 pb45vh w-100 flex justify-center items-start">
      {quizsState.finished ? (
        <div>
          {quizsState.lastScore !== undefined && (
            <div className="mt3 f4">
              Your score: {quizsState.lastScore} / {totalQuestions}
              <br />
              Average:{' '}
              {Math.round(quizsState.lastScore * 40 / totalQuestions) / 2} / 20
            </div>
          )}

          <Button className="f4 ph4 pv2 h-auto" secondary>
            restart
          </Button>
          <Link to={chapterPathname}>
            <Button className="f4 ph4 pv2 h-auto pointer" secondary>
              return to course
            </Button>
          </Link>
        </div>
      ) : (
        <Button className="f4 ph4 pv2 h-auto" onClick={submit} secondary>
          See my score
        </Button>
      )}
      <Card className="fixed bottom-0 left-0 right-0 h3 ph4 w-100 flex justify-center items-start raised-bottom">
        <ProgressWrapper
          quizsState={quizsState}
          totalQuestions={totalQuestions}
        />
      </Card>
    </Card>
  </div>
)

const enhance = compose(
  setPropTypes({
    params: PropTypes.object.isRequired,
    quizsState: PropTypes.object.isRequired,
  }),
  branch(({quizsState}) => !quizsState.quizsIds, renderNothing),
  lifecycle({
    componentWillMount() {
      const {quizsState} = this.props
      const totalQuestions = quizsState.quizsIds.reduce((acc, quizId) => {
        // True-or-false
        if (!quizsState[quizId]) return acc + 1
        // fill-in-the-blank, choose-a-category
        const {answers} = quizsState[quizId]
        if (Array.isArray(answers)) {
          return acc + answers.length
        }
        // others
        return acc + 1
      }, 0)
      this.setState({totalQuestions})
    },
  }),
  connect(undefined, (dispatch: Function, {params}) => ({
    submit: () => {
      scrollTo('quizs-top')
      dispatch(
        completeQuizs({
          params,
        }),
      )
    },
  })),
)
export default enhance(QuizFooter)
