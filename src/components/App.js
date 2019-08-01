import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../views/Homepage';
import Login from '../views/Login';
import Error from '../views/Error';

/**
 * App component, renders all the other components.
 */
const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route to="" component={Error} />
      </Switch>
    </Router>
  </div>
);

export default App;
