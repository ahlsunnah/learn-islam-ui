import {addData, addScore, addTotal, startQuizs} from 'actions/quizs'
import PropTypes from 'prop-types'
import * as React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle, setPropTypes, withPropsOnChange} from 'recompose'
import {calculateTotalQuestions, getQuizsState} from 'selectors/quizs'
import Quiz from './Quiz'
import QuizFooter from './QuizFooter'
import QuizHeader from './QuizHeader'
import {INext, IQuizData, IParams} from './types'

type QuizType = {
  type: string
  data: object
}
interface Props {
  addData: () => void
  addScore: () => void
  coursePathname: string
  courseStrings: {
    title: string
  }
  dAddTotal: (total: number) => void
  dStartQuizs: () => void
  levelSubtitle: string
  next: INext
  nextQuiz?: INext
  params: {
    courseId: string
    difficulty: number
    locale: string
  }
  quizs: Map<string, QuizType>
  quizsIds?: Array<string>
  quizsState: {
    finished: boolean
    lastScore?: number
    started: boolean
    [key: string]: any
  }
  t: IQuizData['translations']
  totalQuestions?: number
}
interface QuizsIdsProps {
  quizsIds: Array<string>
}

class QuizForm extends React.Component<Props & QuizsIdsProps> {
  render() {
    const {
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
    } = this.props
    return (
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
              // @ts-ignore
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
  }
}

const enhance = compose(
  withPropsOnChange(
    ['quizs'],
    ({quizs}: {quizs: IQuizData['course']['quizs']}) => {
      const enhanceQuiz = (
        acc: Map<string, object>,
        quiz: IQuizData['course']['quizs'][0],
      ) => {
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
    },
  ),
  setPropTypes({
    params: PropTypes.shape({
      courseId: PropTypes.string.isRequired,
      difficulty: PropTypes.number.isRequired,
      locale: PropTypes.string.isRequired,
    }).isRequired,
    quizs: PropTypes.object.isRequired,
  }),
  connect(
    (state: {quizs: any}, {params}: {params: IParams}) => {
      const quizsState = getQuizsState(state, params)
      const totalQuestions = calculateTotalQuestions(state, params)
      return {
        quizsState,
        quizsIds: quizsState.quizsIds,
        totalQuestions,
      }
    },
    (dispatch: Function, {params, quizs}: {params: IParams; quizs: any}) => ({
      addData: ({
        data,
        quizId,
        started,
      }: {
        data: any
        quizId: string
        started: boolean
      }) => {
        dispatch(addData({data, params, quizId, started}))
      },
      addScore: (score: number) => {
        dispatch(addScore({params, score}))
      },
      dAddTotal: (total: number) => {
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
  lifecycle<Props, {}>({
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

      if (quizsState.total !== totalQuestions && totalQuestions) {
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
  withPropsOnChange<Props, Props & QuizsIdsProps>(
    ['quizsIds'],
    // @ts-ignore
    ({quizs, quizsIds}) => ({
      quizsIds: quizsIds || Array.from(quizs.keys()), // default value for SSR
    }),
  ),
)
// @ts-ignore
export default enhance(QuizForm)
