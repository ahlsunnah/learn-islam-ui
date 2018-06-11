const quizsByDifficulty = (state = {finished: false, quizs: []}, action) => {
  switch (action.type) {
    case 'ADD_DATA_TO_QUIZ':
      return {
        ...state,
        [action.quizId]: {
          ...state[action.quizId],
          ...action.data,
        },
      }
    case 'ADD_SCORE':
      return {
        ...state,
        lastScore: state.lastScore + action.score,
      }
    case 'COMPLETE_QUIZ':
      return {
        ...state,
        finished: true,
        lastScore: 0,
      }
    case 'START_QUIZ':
      return {
        ...state,
        finished: false,
        quizsIds: action.quizsIds,
      }

    default:
      return state
  }
}

const quizsByLocale = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATA_TO_QUIZ':
    case 'ADD_SCORE':
    case 'COMPLETE_QUIZ':
    case 'START_QUIZ':
      return {
        ...state,
        [action.params.difficulty]: quizsByDifficulty(
          state[action.params.difficulty],
          action,
        ),
      }

    default:
      return state
  }
}

const quizsByChapterId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATA_TO_QUIZ':
    case 'ADD_SCORE':
    case 'COMPLETE_QUIZ':
    case 'START_QUIZ':
      return {
        ...state,
        [action.params.locale]: quizsByLocale(
          state[action.params.locale],
          action,
        ),
      }

    default:
      return state
  }
}

const quizs = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATA_TO_QUIZ':
    case 'ADD_SCORE':
    case 'COMPLETE_QUIZ':
    case 'START_QUIZ':
      return {
        ...state,
        [action.params.chapterId]: quizsByChapterId(
          state[action.params.chapterId],
          action,
        ),
      }

    default:
      return state
  }
}

export default quizs
