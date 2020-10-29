import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';

import './index.css';

import reportWebVitals from './reportWebVitals';

const cache = new InMemoryCache();

const API_URL = 'http://lotb.pomp.com/pimcore-graphql-webservices/doritos_lotb_public';
const API_KEY = process.env.REACT_APP_API_KEY;

const client = new ApolloClient({
  uri: `${API_URL}?apikey=${API_KEY}`,
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
