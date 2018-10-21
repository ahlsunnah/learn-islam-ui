// @flow
/* eslint react/jsx-filename-extension: 0 */
import * as React from 'react'
import {Provider} from 'react-redux'
import Layout from './src/components/Layout'

import createStore from './src/createStore'

type Props = {
  element: React.Node,
}

export const wrapPageElement = ({element}: Props) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout>{element}</Layout>
}

export const wrapRootElement = ({element}: Props) => {
  const {store} = createStore()

  return <Provider store={store}>{element}</Provider>
}
