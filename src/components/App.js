import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import Homepage from '../views/Homepage';
import Navbar from './NavBar/Index';
import Register from '../views/register';
import Login from './LoginForm/Index';
import About from '../views/about';
import Dashboard from '../views/Dashboard';
import NotFound from '../views/NotFound';

const App = () => (
  <div>
    <Notifications />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </div>
);


export default App;
