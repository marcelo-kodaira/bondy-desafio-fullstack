import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/local/desafio", // Endpoint do GraphQL
  cache: new InMemoryCache(),
});

export default client;
