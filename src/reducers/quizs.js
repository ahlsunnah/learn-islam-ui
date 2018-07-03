const quizsByDifficulty = (
  state = {finished: false, quizsIds: [], try: 0},
  action,
) => {
  switch (action.type) {
    case 'ADD_DATA_TO_QUIZ':
      return {
        ...state,
        started: action.started,
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
        finished: false,
        lastScore: state.lastScore,
        quizsIds: action.quizsIds,
        try: state.try + 1,
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
