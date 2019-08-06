import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../views/Homepage';
import Login from '../views/Login';
import Navbar from './NavBar/NavBar';
import Register from '../views/register';
import About from '../views/about';

// import Error from '../views/Error';
import NotFound from '../views/NotFound';

/**
 * App component, renders all the other components.
 */
const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
