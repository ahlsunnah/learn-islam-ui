// @flow
/* eslint react/jsx-filename-extension: 0 */
import 'babel-polyfill'
import * as React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {Router} from 'react-router-dom'
import createStore from './src/createStore'

exports.replaceRouterComponent = ({history}: {history: {}}) => {
  const {store, persistor} = createStore()

  const ConnectedRouterWrapper = ({children}: {children: React.Node}) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>{children}</Router>
      </PersistGate>
    </Provider>
  )

  return ConnectedRouterWrapper
}
