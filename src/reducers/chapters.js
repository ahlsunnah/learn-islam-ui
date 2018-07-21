const chapters = (state = {}, action) => {
  switch (action.type) {
    case 'COMPLETE_CHAPTER':
      return {
        ...state,
        [action.id]: true,
      }

    default:
      return state
  }
}

export default chapters
