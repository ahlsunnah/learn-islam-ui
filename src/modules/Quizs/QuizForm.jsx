// @flow
import {addData, addScore, startQuizs} from 'actions/quizs'
import PropTypes from 'prop-types'
import * as React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle, setPropTypes, withPropsOnChange} from 'recompose'
import {calculateTotalQuestions, getQuizsState} from 'selectors/quizs'
import Quiz from './Quiz'
import QuizFooter from './QuizFooter'
import QuizHeader from './QuizHeader'

type QuizType = {
  type: string,
  data: {},
}
type Props = {
  addData: Function, // eslint-disable-line react/no-unused-prop-types
  addScore: Function, // eslint-disable-line react/no-unused-prop-types
  chapterPathname: string,
  chapterStrings: {
    title: string,
  },
  params: {
    chapterId: string,
    difficulty: number,
    locale: string,
  },
  quizs: Map<string, QuizType>,
  quizsIds: Array<string>,
  quizsState: {
    finished: boolean,
    lastScore?: number,
  },
  t: {
    average: string,
    assessmentFail: string,
    assessmentGood: string,
    assessmentPerfect: string,
    assessmentVeryGood: string,
    backToCourse: string,
    grade: string,
    quiz: string,
    restartQuizs: string,
    start: string,
    yourScore: string,
    yourLastScore: string,
    goToTop: string,
    seeYourScore: string,
  },
  totalQuestions?: number,
}
const QuizForm = ({
  chapterPathname,
  chapterStrings,
  quizs,
  quizsIds,
  quizsState,
  totalQuestions,
  ...props
}: Props) => (
  <div id="quizs-top">
    <QuizHeader
      chapterPathname={chapterPathname}
      chapterStrings={chapterStrings}
      finished={quizsState.finished}
      lastScore={quizsState.lastScore}
      t={props.t}
      totalQuestions={totalQuestions}
    />
    <div id="quizs-start">
      {quizsIds.map(
        (quizId, i) => (
          <Quiz
            {...quizs.get(quizId)}
            {...props}
            key={quizId}
            number={i + 1}
            quizId={quizId}
            state={quizsState[quizId] || {}}
            finished={quizsState.finished}
          />
        ),
        quizs,
      )}
    </div>
    <QuizFooter
      finished={quizsState.finished}
      params={props.params}
      quizsState={quizsState}
      totalQuestions={totalQuestions}
      t={props.t}
    />
  </div>
)

const enhance = compose(
  withPropsOnChange(['quizs'], ({quizs}) => {
    const enhanceQuiz = (acc, quiz) => {
      try {
        acc.set(quiz.id, {
          type: quiz.type,
          data: JSON.parse(quiz.strings[0].data),
        })
      } catch (e) {
        // TODO: log to sentry
        console.error('Could not parse quiz', quiz) // eslint-disable-line no-console
      }
      return acc
    }
    return {
      quizs: quizs.reduce(enhanceQuiz, new Map()),
    }
  }),
  setPropTypes({
    params: PropTypes.shape({
      chapterId: PropTypes.string.isRequired,
      difficulty: PropTypes.number.isRequired,
      locale: PropTypes.string.isRequired,
    }).isRequired,
    quizs: PropTypes.object.isRequired,
  }),
  connect(
    (state, {params}) => {
      const quizsState = getQuizsState(state, params)
      const totalQuestions = calculateTotalQuestions(state, params)
      return {
        quizsState,
        quizsIds: quizsState.quizsIds,
        totalQuestions,
      }
    },
    (dispatch: Function, {params, quizs}) => ({
      addData: ({data, quizId}) => {
        dispatch(addData({data, params, quizId}))
      },
      addScore: (score) => {
        dispatch(addScore({params, score}))
      },
      startQuizs: () =>
        dispatch(
          startQuizs({
            params,
            quizs,
          }),
        ),
    }),
  ),
  lifecycle({
    componentDidMount() {
      const {quizsIds} = this.props
      if (!quizsIds) this.props.startQuizs()
    },
  }),
  withPropsOnChange(['quizsIds'], ({quizs, quizsIds}) => ({
    quizsIds: quizsIds || Array.from(quizs.keys()), // default value for SSR
  })),
)
export default enhance(QuizForm)
