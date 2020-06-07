import React from 'react'
import ReactDom from 'react-dom'
import ApolloCLient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'

const client = new ApolloCLient({
  uri: 'https://petgram-server.razielini.now.sh/graphql'
})

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app'))
