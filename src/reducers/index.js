import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import errorReducer from './errorReducer';
import articles from './articles';
import authReducer from './authReducer.js';

export default combineReducers({
  auth: authReducer,
  article: articleReducer,
  errors: errorReducer,
  articles,
});
