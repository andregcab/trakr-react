import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth } from 'kr-auth-react';
import env from 'environment';

const Provider = ({ children }) => {
  const { session } = useAuth();

  const httpLink = new HttpLink({
    uri: env.API_BASE_URL + env.API_GQL_PATH,
  });

  const authLink = setContext(async () => {
    try {
      const access = session.accessToken.jwtToken;
      const identification = session.idToken.jwtToken;

      return {
        headers: {
          Access: `Bearer ${access}`,
          Identification: `Bearer ${identification}`,
        },
      };
    } catch {
      return {};
    }
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Provider;
