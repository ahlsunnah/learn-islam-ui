/* eslint react/jsx-filename-extension: 0 */
import React from 'react'
import Layout from './src/components/Layout'
import WrapWithProvider from './src/hoc/WrapWithProvider'

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

export const wrapRootElement = WrapWithProvider
