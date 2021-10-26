import React from 'react';
// import { useTeams } from 'msteams-react-base-component';
// import * as microsoftTeams from '@microsoft/teams-js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Overview from './Overview';
import Layout from './Layout';
import AuthenticatedApolloProvider from '../graphql/AuthenticatedApolloProvider';
// import NotInTeams from './NotInTeams';

const AuthedApp = () => {
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
};

const App = () => {
  // const [{ inTeams, context }] = useTeams();

  // if (inTeams === true) {
  //   microsoftTeams.authentication.getAuthToken({
  //     successCallback: (token) => {
  //       console.log('this is token', token);
  //     },
  //     failureCallback: (message) => {
  //       console.log('error', message);
  //     },
  //   });

  return AuthedApp();
  // }
  // return (
  //   <Router basename="/">
  //     <Route path="/" component={NotInTeams} />
  //   </Router>
  // );
};

export default App;
