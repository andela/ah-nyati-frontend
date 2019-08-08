import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import Homepage from '../views/Homepage';
import Login from '../views/Login';
import Navbar from './NavBar/NavBar';
import Register from '../views/register';
import About from '../views/about';
import NotFound from '../views/NotFound';
import ResetPassword from '../views/ResetPassword';
import PasswordReset from './PasswordReset/PasswordReset';

/**
 * App component, renders all the other components.
 */
const App = () => (
  <div>
    <Notifications />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/resetPassword" component={ResetPassword} />
      <Route path="/newpassword" component={PasswordReset} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
