// @flow
import {createStore as reduxCreateStore} from 'redux'
import reducers from './reducers'

const initialState = {}

/* eslint no-underscore-dangle: 0 */
const createStore = () =>
  process.env.NODE_ENV === 'production'
    ? reduxCreateStore(reducers, initialState)
    : reduxCreateStore(
        reducers,
        initialState,
        typeof window !== 'undefined' &&
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
export default createStore
