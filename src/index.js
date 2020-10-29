import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import App from './App';

import './index.css';

import reportWebVitals from './reportWebVitals';

const cache = new InMemoryCache();

const API_URL = 'http://lotb.pomp.com/pimcore-graphql-webservices/doritos_lotb_public';
const API_KEY = process.env.REACT_APP_API_KEY;

const httpLink = createHttpLink({
  uri: `${API_URL}?apikey=${API_KEY}`
});

const authLink = setContext((_, { headers, ...context }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...(token ? {authorization: token} : ''),
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache
});

function Doritos() {
  return (
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  )
}

render(<Doritos />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
