import { useMemo } from 'react'
import gql from 'graphql-tag'
import _get from 'lodash/get'
import { useQuery } from '@apollo/react-hooks'
import { FirebaseUser } from 'services/auth'
import { MeQuery, MeQueryVariables } from '../hasuraTypes'

const USER_QUERY = gql`
  query Me($id: String!) {
    users(where: { fbase: { _eq: $id } }) {
      id
      first_name
      email
      last_name
      country
    }
  }
`

function useMeQuery() {
  const currentUser: FirebaseUser = JSON.parse(localStorage.getItem('authUser') as string)

  const currentUserId = useMemo(() => _get(currentUser, 'uid', ''), [currentUser])

  return useQuery<MeQuery, MeQueryVariables>(USER_QUERY, {
    variables: { id: currentUserId },
  })
}

export default useMeQuery
