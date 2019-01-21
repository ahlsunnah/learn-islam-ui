import {addData, addScore, addTotal, startQuizs} from 'actions/quizs'
import PropTypes from 'prop-types'
import * as React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle, setPropTypes, withPropsOnChange} from 'recompose'
import {calculateTotalQuestions, getQuizsState} from 'selectors/quizs'
import Quiz from './Quiz'
import QuizFooter from './QuizFooter'
import QuizHeader from './QuizHeader'

type QuizType = {
  type: string
  data: {}
}
interface Props {
  addData: Function // eslint-disable-line react/no-unused-prop-types
  addScore: Function // eslint-disable-line react/no-unused-prop-types
  coursePathname: string
  courseStrings: {
    title: string
  }
  dStartQuizs: Function
  levelSubtitle: string
  next: Object
  nextQuiz?: Object
  params: {
    courseId: string
    difficulty: number
    locale: string
  }
  quizs: Map<string, QuizType>
  quizsIds: Array<string>
  quizsState: {
    finished: boolean
    lastScore?: number
    started: boolean
  }
  t: Object
  totalQuestions?: number
}
const QuizForm = ({
  coursePathname,
  courseStrings,
  dStartQuizs,
  levelSubtitle,
  next,
  nextQuiz,
  quizs,
  quizsIds,
  quizsState,
  totalQuestions,
  ...props
}: Props) => (
  <div id="quizs-top">
    <QuizHeader
      coursePathname={coursePathname}
      courseStrings={courseStrings}
      finished={quizsState.finished}
      lastScore={quizsState.lastScore}
      levelSubtitle={levelSubtitle}
      next={next}
      nextQuiz={nextQuiz}
      restartQuizs={dStartQuizs}
      started={quizsState.started}
      t={props.t}
      totalQuestions={totalQuestions}
    />
    <div id="quizs-start" key={quizsState.try}>
      {quizsIds.map((quizId, i) => {
        return (
          <Quiz
            {...quizs.get(quizId)}
            {...props}
            key={quizId}
            number={i + 1}
            quizId={quizId}
            state={quizsState[quizId] || {}}
            finished={quizsState.finished}
          />
        )
      }, quizs)}
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
      courseId: PropTypes.string.isRequired,
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
      addData: ({data, quizId, started}) => {
        dispatch(addData({data, params, quizId, started}))
      },
      addScore: (score) => {
        dispatch(addScore({params, score}))
      },
      dAddTotal: (total) => {
        dispatch(addTotal({params, total}))
      },
      dStartQuizs: () =>
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
      const {
        dAddTotal,
        dStartQuizs,
        quizs,
        quizsIds,
        quizsState,
        totalQuestions,
      } = this.props
      if (!quizsIds) {
        dStartQuizs()
      } else {
        const containDeletedQuiz = quizsIds.some((quizId) => {
          return !quizs.get(quizId)
        })
        if (containDeletedQuiz) {
          dStartQuizs()
        }
      }

      if (quizsState.total !== totalQuestions) {
        dAddTotal(totalQuestions)
      }
    },
    // TODO
    // componentDidUpdate() {
    //   const {dAddTotal, quizsState, totalQuestions} = this.props
    //   console.log(quizsState)
    //   if (quizsState.total !== totalQuestions) {
    //     dAddTotal(totalQuestions)
    //   }
    // },
  }),
  withPropsOnChange(['quizsIds'], ({quizs, quizsIds}) => ({
    quizsIds: quizsIds || Array.from(quizs.keys()), // default value for SSR
  })),
)
export default enhance(QuizForm)
