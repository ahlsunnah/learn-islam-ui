import { useEffect, useState } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

type ClientState = ApolloClient<NormalizedCacheObject> | null

export default function useApolloClientConfig(token: string) {
  const [clientState, setClientState] = useState<ClientState>(null)

  useEffect(() => {
    const httpLink = createHttpLink({
      uri: process.env.GATSBY_API,
    })

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }
    })

    const client = new ApolloClient({
      link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
          if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
              console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
            )
          if (networkError) console.log(`[Network error]: ${networkError}`)
        }),
        authLink.concat(httpLink),
      ]),
      cache: new InMemoryCache(),
    })

    setClientState(client)
  }, [token])

  return { client: clientState }
}
