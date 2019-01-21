/* eslint react/jsx-filename-extension: 0 */
import * as React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import PropTypes from 'prop-types'
import createStore from './src/createStore'
import Layout from './src/components/Layout'

export const onClientEntry = () => {
  if (process.env.NODE_ENV === 'production')
    import('@sentry/browser').then((sentry) => {
      sentry.init({
        dsn: 'https://37ac93a8f3644b2fad4a3594da09c668@sentry.io/1205429',
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
