// @flow
import {addData, addScore, startQuizs} from 'actions/quizs'
import PropTypes from 'prop-types'
import * as React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle, setPropTypes, withPropsOnChange} from 'recompose'
import Quiz from './Quiz'
import QuizFooter from './QuizFooter'

type QuizType = {
  type: string,
  data: {},
}
type Props = {
  addData: Function, // eslint-disable-line react/no-unused-prop-types
  addScore: Function, // eslint-disable-line react/no-unused-prop-types
  params: {
    chapterId: string,
    difficulty: number,
    locale: string,
  },
  quizs: Map<string, QuizType>,
  quizsIds: Array<string>,
  quizsState: {
    finished: boolean,
  },
  setRef: Function,
  t: {}, // eslint-disable-line react/no-unused-prop-types
}
const QuizForm = ({quizs, quizsIds, quizsState, setRef, ...props}: Props) => (
  <div ref={setRef}>
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
    <QuizFooter
      finished={quizsState.finished}
      params={props.params}
      quizsState={quizsState}
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
    ({quizs}, {params: {chapterId, difficulty, locale}}) => {
      const quizsState = (quizs[chapterId] &&
        quizs[chapterId][locale] &&
        quizs[chapterId][locale][difficulty]) || {finished: false}
      return {
        quizsState,
        quizsIds: quizsState.quizsIds,
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
