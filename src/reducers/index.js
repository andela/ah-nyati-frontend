import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import resetReducer from './resetReducer';
import articleReducer from './articleReducer';
import registerErrorsReducer from './registerErrorsReducer';
import articles from './articlesReducer';
import user from './getUserReducer';

import createArticleReducer from './article/article';
import fetchCategoryReducer from './category/category';

export default combineReducers({
  auth: authReducer,
  err: errorReducer,
  reset: resetReducer,
  article: articleReducer,
  signupErrors: registerErrorsReducer,
  articles,
  user,
  articleReducer,
  createArticleReducer,
  toastr: toastrReducer,
  fetchCategoryReducer,
});
