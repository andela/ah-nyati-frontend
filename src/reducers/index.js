import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import articles from './articles';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  article: articleReducer,
  errors: errorReducer,
  articles,
});
