/* eslint react/jsx-filename-extension: 0 */
import React from 'react'
import Layout from './src/components/Layout'
import WrapWithProvider from './src/hoc/WrapWithProvider'

export const wrapPageElement = ({ element }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout>{element}</Layout>
}

export const wrapRootElement = WrapWithProvider
