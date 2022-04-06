import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { onError, ErrorResponse } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://api.spacex.land/graphql/', // should be injected via environment variables in production
})

// Log any GraphQL errors or network error that occurred
const errorLink = onError((errorResponse: ErrorResponse) => {
  const { graphQLErrors, networkError } = errorResponse
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    )
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  name: 'default',
  version: '1.0.0',
  cache,
})

export default apolloClient
