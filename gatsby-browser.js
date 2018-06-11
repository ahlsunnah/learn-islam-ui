// @flow
/* eslint react/jsx-filename-extension: 0 */
import 'babel-polyfill'
import * as React from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import createStore from './src/createStore'

exports.replaceRouterComponent = ({history}: {history: {}}) => {
  const store = createStore()

  const ConnectedRouterWrapper = ({children}: {children: React.Node}) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
