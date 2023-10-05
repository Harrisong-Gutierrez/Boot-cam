import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import client from '../graphql/apollo-client';
import ReduxProvider from '../Providers/redux-provider';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </QueryClientProvider>
  </ApolloProvider>
);

export default App;
