import { useMemo } from "react";
import { ApolloClient, ApolloLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getJwtToken } from "../libs/auth/index"; // your auth utils

let apolloClient;

function getHeaders() {
  const token = getJwtToken();
  const headers = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

function createApolloClient() {
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        ...getHeaders(),
      },
    }));
    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: ${message}`)
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    link: from([authLink, errorLink]),
    cache: new InMemoryCache(),
  });
}

export function useApollo() {
  return useMemo(() => {
    if (!apolloClient) {
      apolloClient = createApolloClient();
    }
    return apolloClient;
  }, []);
}
