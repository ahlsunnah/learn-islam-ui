import {createSelector} from 'reselect'

export const getQuizsState = ({quizs}, {chapterId, difficulty, locale}) =>
  (quizs[chapterId] &&
    quizs[chapterId][locale] &&
    quizs[chapterId][locale][difficulty]) || {finished: false}

// TODO: optimize
export const calculateTotalQuestions = createSelector(
  [getQuizsState],
  (quizsState) =>
    quizsState.quizsIds &&
    quizsState.quizsIds.reduce((acc, quizId) => {
      // True-or-false
      if (!quizsState[quizId]) return acc + 1
      // fill-in-the-blank, choose-a-category
      const {answers} = quizsState[quizId]
      if (Array.isArray(answers)) {
        return acc + answers.length
      }
      // others
      return acc + 1
    }, 0),
)
