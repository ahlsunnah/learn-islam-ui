import {addData, addScore, addTotal, startQuizs} from 'actions/quizs'
import PropTypes from 'prop-types'
import * as React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle, setPropTypes, withPropsOnChange} from 'recompose'
import {calculateTotalQuestions, getQuizsState} from 'selectors/quizs'
import Quiz from './Quiz'
import QuizFooter from './QuizFooter'
import QuizHeader from './QuizHeader'
import {INext, IParams} from './types'
import {IQuizsCourse, IQuizsQuiz, IQuizsTranslations} from 'types/quizs'

interface QuizFormProps {
  coursePathname: string
  courseStrings: {
    id: string
    title: string
  }
  params: IParams
  levelSubtitle: string
  next: INext
  quizs: IQuizsCourse['quizs']
  t: IQuizsTranslations
}

interface EnhanceProps {
  addData: () => void
  addScore: () => void
  dAddTotal: (total: number) => void
  dStartQuizs: () => void
  quizs: Map<
    string,
    {
      type: string
      data: any
    }
  >
  quizsIds?: Array<string>
  quizsState: {
    finished: boolean
    lastScore?: number
    started: boolean
    [key: string]: any
  }
  t: IQuizsTranslations
  totalQuestions?: number
}
interface QuizsIdsProps {
  quizsIds: Array<string>
}

export type QuizComponentProps = QuizFormProps & EnhanceProps & QuizsIdsProps

class QuizForm extends React.Component<QuizComponentProps> {
  render() {
    const {
      coursePathname,
      courseStrings,
      dStartQuizs,
      levelSubtitle,
      next,
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
                finished={quizsState.finished}
                number={i + 1}
                quizId={quizId}
                state={quizsState[quizId] || {}}
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

const enhance = compose<QuizFormProps, QuizComponentProps>(
  withPropsOnChange(['quizs'], ({quizs}: QuizFormProps) => {
    const enhanceQuiz = (
      acc: Map<string, object>,
      {node: quiz}: {node: IQuizsQuiz},
    ) => {
      try {
        const data = JSON.parse(
          JSON.parse(quiz.translations.edges[0].node.data),
        )
        acc.set(quiz.id, {
          type: quiz.type,
          data,
        })
      } catch (e) {
        // TODO: log to sentry
        console.error('Could not parse quiz', quiz) // eslint-disable-line no-console
      }
      return acc
    }
    return {
      quizs: quizs.edges.reduce(enhanceQuiz, new Map()),
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
  lifecycle<EnhanceProps, {}>({
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
  withPropsOnChange<EnhanceProps, EnhanceProps & QuizsIdsProps>(
    ['quizsIds'],
    ({quizs, quizsIds}) => ({
      quizsIds: quizsIds || Array.from(quizs.keys()), // default value for SSR
    }),
  ),
)

export default enhance(QuizForm)
