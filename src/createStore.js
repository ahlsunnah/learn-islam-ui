import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'localforage'
import reducers from './reducers'

const initialState = {}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

/* eslint no-underscore-dangle: 0 */
const createPersistedStore = () => {
  const store =
    process.env.NODE_ENV === 'production'
      ? createStore(persistedReducer, initialState)
      : createStore(
          persistedReducer,
          initialState,
          typeof window !== 'undefined' &&
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
  const persistor = persistStore(store)

  return {store, persistor}
}
export default createPersistedStore
