// @flow
import {createStore as reduxCreateStore} from 'redux'

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const initialState = {count: 0}

/* eslint no-underscore-dangle: 0 */
const createStore = () =>
  process.env.NODE_ENV === 'production'
    ? reduxCreateStore(reducer, initialState)
    : reduxCreateStore(
        reducer,
        initialState,
        window &&
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
export default createStore
