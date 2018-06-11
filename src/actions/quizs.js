import shuffle from 'lib/shuffle'

export const startQuizs = ({params, quizs}) => ({
  type: 'START_QUIZ',
  params,
  quizsIds: shuffle(Array.from(quizs.keys())),
})

export const addData = ({data, params, quizId}) => ({
  type: 'ADD_DATA_TO_QUIZ',
  data,
  params,
  quizId,
})

export const completeQuizs = ({params}) => ({
  type: 'COMPLETE_QUIZ',
  params,
})

export const addScore = ({params, score}) => ({
  type: 'ADD_SCORE',
  params,
  score,
})
