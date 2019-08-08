import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import { ToastContainer } from 'react-toastify';
import NavBar from './NavBar/NavBar';
import Homepage from '../views/Homepage';
import Register from '../views/register';
import Login from './LoginForm/Index';
import About from '../views/about';
import Dashboard from '../views/Dashboard';
import NotFound from '../views/NotFound';
import ResetPassword from '../views/ResetPassword';
import PasswordReset from './PasswordReset/PasswordReset';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div>
    <Notifications />
    <NavBar />
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/resetPassword" component={ResetPassword} />
      <Route path="/newpassword" component={PasswordReset} />
      <Route component={NotFound} />
    </Switch>
  </div>
);


export default App;
