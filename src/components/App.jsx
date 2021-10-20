import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Overview from './Overview';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function App() {
  return (
    <Router basename="/">
      <Topbar />
      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/overview" component={Overview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
