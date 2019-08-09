import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Homepage from '../views/Homepage';
import Register from '../views/Register';
import LoginForm from './LoginForm/LoginForm';
import About from '../views/about';
import Dashboard from '../views/Dashboard';
import NotFound from '../views/NotFound';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={LoginForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </div>
);


export default App;
