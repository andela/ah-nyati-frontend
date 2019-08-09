import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import errorReducer from './errorReducer';
import articles from './articles';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  article: articleReducer,
  errors: errorReducer,
  articles,
});
