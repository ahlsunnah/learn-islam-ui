/* eslint react/jsx-filename-extension: 0 */
import React from 'react'
import Layout from './src/components/Layout'
import WrapWithProvider from './src/hoc/WrapWithProvider'

type WrapPageElementsProps = ({ element }: { element: React.ReactNode }) => React.ReactNode

export const wrapPageElement: WrapPageElementsProps = ({ element }) => {
  return <Layout>{element}</Layout>
}

export const wrapRootElement = WrapWithProvider
