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

// export const answerQuiz = ({answers, chapterId, difficulty, id, type}) => {}

// export const completeQuizs = ({chapterId, difficulty}) => {}
