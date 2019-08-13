import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import resetReducer from './resetReducer';
import articleReducer from './articleReducer';

export default combineReducers({
  auth: authReducer,
  err: errorReducer,
  reset: resetReducer,
  article: articleReducer,
});
