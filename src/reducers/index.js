import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import resetReducer from './resetReducer';
import articleReducer from './articleReducer';
import registerErrorsReducer from './registerErrorsReducer';
import articles from './articlesReducer';
import user from './getUserReducer';

export default combineReducers({
  auth: authReducer,
  err: errorReducer,
  reset: resetReducer,
  article: articleReducer,
  signupErrors: registerErrorsReducer,
  articles,
  user,
});
