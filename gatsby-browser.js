/* eslint react/jsx-filename-extension: 0 */
import 'core-js/modules/es6.set'
import 'core-js/modules/es6.map'
import 'raf/polyfill'
import * as React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import PropTypes from 'prop-types'
import createStore from './src/createStore'
import Layout from './src/components/Layout'

export const onClientEntry = () => {
  if (process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN)
    import('@sentry/browser').then((sentry) => {
      sentry.init({
        dsn: process.env.SENTRY_DSN,
      })

      window.sentry = sentry
    })
}

export const wrapPageElement = ({element}) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout>{element}</Layout>
}
wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
}
export const wrapRootElement = ({element}) => {
  const {store, persistor} = createStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )
}

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
