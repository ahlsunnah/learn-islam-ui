const chapters = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETE_CHAPTER':
      return {
        ...state,
        [action.id]: !state[action.id],
      }

    default:
      return state
  }
}

export default chapters
