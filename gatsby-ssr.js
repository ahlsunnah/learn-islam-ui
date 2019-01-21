/* eslint react/jsx-filename-extension: 0 */
import * as React from 'react'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'
import Layout from './src/components/Layout'
import createStore from './src/createStore'

export const wrapPageElement = ({element}) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout>{element}</Layout>
}
wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
}

export const wrapRootElement = ({element}) => {
  const {store} = createStore()

  return <Provider store={store}>{element}</Provider>
}
wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
