const MINIMUM_RESULT = 0.75

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
    case 'ADD_SCORE': {
      const lastScore = state.lastScore + action.score
      return {
        ...state,
        lastScore,
        passed: state.passed || lastScore >= state.total * MINIMUM_RESULT,
      }
    }
    case 'ADD_TOTAL':
      return {
        ...state,
        total: action.total,
      }
    case 'COMPLETE_QUIZ':
      return {
        ...state,
        bestScore:
          state.bestScore && state.bestScore > state.lastScore
            ? state.bestScore
            : state.lastScore,
        finished: true,
        lastScore: 0,
      }
    case 'START_QUIZ':
      return {
        bestScore: state.bestScore,
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
    case 'ADD_TOTAL':
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

const quizsByCourseId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATA_TO_QUIZ':
    case 'ADD_SCORE':
    case 'ADD_TOTAL':
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
    case 'ADD_TOTAL':
    case 'COMPLETE_QUIZ':
    case 'START_QUIZ':
      return {
        ...state,
        [action.params.courseId]: quizsByCourseId(
          state[action.params.courseId],
          action,
        ),
      }

    default:
      return state
  }
}

export default quizs
