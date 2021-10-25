import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import env from 'environment';

const Provider = ({ children }) => {
  const httpLink = new HttpLink({
    uri: env.API_BASE_URL + env.API_GQL_PATH,
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Provider;
