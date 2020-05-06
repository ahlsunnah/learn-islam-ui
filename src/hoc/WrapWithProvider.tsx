import React, { ReactElement } from 'react'
import AuthProvider from 'hoc/AuthProvider'
import ApolloConfig from 'hoc/ApolloConfig'

type PropTypes = {
  element: ReactElement
}

export default function WrapWithProviders({ element }: PropTypes) {
  return (
    <AuthProvider>
      <ApolloConfig>{element}</ApolloConfig>
    </AuthProvider>
  )
}
