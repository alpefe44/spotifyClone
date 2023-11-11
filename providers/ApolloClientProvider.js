import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: "https://sidijaber.stepzen.net/api/needled-mink/__graphql",
  headers: {
    Authorization:
      'apikey sidijaber::stepzen.net+1000::b3dd920eefc43682ae22e656b2b2b8a26482d8dbbbd180eff31d75769c25a0e1',
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;