import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const client = new ApolloClient({
  // uri: 'https://countries.trevorblades.com/graphql',
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(), 
});

const queryclient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
