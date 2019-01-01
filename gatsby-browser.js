// @flow
/* eslint react/jsx-filename-extension: 0 */
import * as React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import createStore from './src/createStore'
import Layout from './src/components/Layout'

type Props = {
  element: React.Node,
}

export const onClientEntry = () => {
  if (process.env.NODE_ENV === 'production')
    import('@sentry/browser').then((sentry) => {
      sentry.init({
        dsn: 'https://37ac93a8f3644b2fad4a3594da09c668@sentry.io/1205429',
      })

      window.sentry = sentry
    })
}

export const wrapPageElement = ({element}: Props) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout>{element}</Layout>
}

export const wrapRootElement = ({element}: Props) => {
  const {store, persistor} = createStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )
}
