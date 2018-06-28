import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { defaults, resolvers } from './graphql';

import Root from './screens/Root';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_ENDPOINT,
  clientState: {
    defaults,
    resolvers
    // typeDefs
  }
});

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </ThemeProvider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line react/jsx-filename-extension
registerServiceWorker();
