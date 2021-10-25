import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Overview from './Overview';
import Layout from './Layout';
import AuthenticatedApolloProvider from '../graphql/AuthenticatedApolloProvider';

function App() {
  return (
    <AuthenticatedApolloProvider>
      <Router basename="/">
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/overview" component={Overview} />
          </Switch>
        </Layout>
      </Router>
    </AuthenticatedApolloProvider>
  );
}

export default App;
