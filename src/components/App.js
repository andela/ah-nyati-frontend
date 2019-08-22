import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import ReduxToastr from 'react-redux-toastr';
import NavBar from './NavigationBar';
import Homepage from '../views/Homepage';
import Register from '../views/Register';
import Login from './LoginForm/Index';
import About from '../views/about';
import AuthUserProfile from '../views/Dashboard';
import NotFound from '../views/NotFound';
import SocialAuth from '../views/SocialAuth';
import ResetPassword from '../views/ResetPassword';
import PasswordReset from './PasswordReset/PasswordReset';
import Articles from '../views/Articles';
import Profile from '../views/Profile';
import store from '../store';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser } from '../actions/authActions';
import CreateArticlePage from './article/CreateArticlePage';
import UpdateArticlePage from './article/UpdateArticlePage';
import SingleArticle from './SingleArticle';
import Comments from './Comments';

const token = localStorage.jwtToken;
let loggedInUser = {};
/* istanbul ignore next */
if (token) {
  setAuthToken(token);
  const decoded = jwtDecode(token);
  loggedInUser = store.dispatch(setCurrentUser(decoded));
}


const App = () => (
  <React.Fragment>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
    <Notifications />
    <NavBar user={loggedInUser} />
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/authUserProfile" component={AuthUserProfile} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/resetPassword" component={ResetPassword} />
      <Route path="/newpassword" component={PasswordReset} />
      <Route path="/socialAuth" component={SocialAuth} />
      <Route path="/article" component={CreateArticlePage} />
      <Route exact path="/articles" component={Articles} />
      <Route path="/articles/:slug" component={SingleArticle} />
      <Route path="/comments/" component={Comments} />
      <Route path="/updatearticle/:slug" component={UpdateArticlePage} />
      <Route path="/profile/:userId" component={Profile} />

      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
);

export default App;
