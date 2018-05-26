// @flow
import {startQuizs} from 'actions/quizs'
import PropTypes from 'prop-types'
import * as React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle, setPropTypes, withPropsOnChange} from 'recompose'
import Quiz from './Quiz'

type QuizType = {
  type: string,
  data: {},
}
type Props = {
  params: {
    chapterId: string,
    difficulty: number,
    locale: string,
  },
  quizs: Map<string, QuizType>,
  quizsIds: Array<string>,
  quizsState: {},
  t: {},
}
const QuizForm = ({params, quizs, quizsIds, quizsState, t}: Props) => (
  <div className="pv40vh">
    {quizsIds.map(
      (quizId, i) => (
        <Quiz
          key={quizId}
          number={i + 1}
          {...quizs.get(quizId)}
          params={params}
          quizId={quizId}
          state={quizsState[quizId] || {}}
          t={t}
        />
      ),
      quizs,
    )}
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
      const quizsState =
        (quizs[chapterId] &&
          quizs[chapterId][locale] &&
          quizs[chapterId][locale][difficulty]) ||
        {}
      return {
        quizsState,
        quizsIds: quizsState.quizsIds,
      }
    },
    (dispatch, {params, quizs}) => ({
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
