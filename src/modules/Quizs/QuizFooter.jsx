// @flow
import {completeQuizs} from 'actions/quizs'
import Button from 'components/Button'
import Card from 'components/Card'
import scrollTo from 'lib/scrollTo'
import PropTypes from 'prop-types'
import * as React from 'react'
import {connect} from 'react-redux'
import {branch, compose, renderNothing, setPropTypes} from 'recompose'
import ProgressWrapper from './ProgressWrapper'

const scrollToTop = () => scrollTo('quizs-top')

type Props = {
  quizsState: {
    finished: boolean,
    lastScore?: number,
  },
  submit: Function,
  t: {
    goToTop: string,
    progress: string,
    seeYourScore: string,
  },
  totalQuestions: number,
}
const QuizFooter = ({quizsState, submit, t, totalQuestions}: Props) => (
  <div>
    <Card className="ph4 pt4 pb45vh w-100 flex justify-center items-start">
      {quizsState.finished ? (
        <Button className="f4 ph4 pv2 h-auto" onClick={scrollToTop} secondary>
          {t.goToTop}
        </Button>
      ) : (
        <Button className="f4 ph4 pv2 h-auto" onClick={submit} secondary>
          {t.seeYourScore}
        </Button>
      )}
      <Card className="fixed fixedChild bottom-0 right-0 h3 ph4 w-100 flex justify-center items-start raised-bottom">
        <ProgressWrapper
          progressText={t.progress}
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
  connect(
    undefined,
    (dispatch: Function, {params}) => ({
      submit: () => {
        scrollToTop()
        dispatch(
          completeQuizs({
            params,
          }),
        )
      },
    }),
  ),
)
export default enhance(QuizFooter)
