import React, { useContext, ReactElement } from 'react'
import _get from 'lodash/get'
import { ApolloProvider } from '@apollo/react-hooks'
import useClient from 'services/apollo'
import { AuthContext } from 'services/auth'

type PropTypes = {
  children: ReactElement
}

export default function ApolloConfig({ children }: PropTypes) {
  const { user } = useContext(AuthContext)
  const authenticatedUser = _get(user, 'authUser.xa', false)

  const { client } = useClient(authenticatedUser)

  if (authenticatedUser) {
    return children
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
