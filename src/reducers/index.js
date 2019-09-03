import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import resetReducer from './resetReducer';
import articleReducer from './articleReducer';
import registerErrorsReducer from './registerErrorsReducer';
import articles from './articlesReducer';
import user from './getUserReducer';
import success from './success';
import singleArticleReducer from './singleArticleReducer';
import createArticleReducer from './article/article';
import fetchCategoryReducer from './category/category';
import updateArticlesReducer from './article/update';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  err: errorReducer,
  reset: resetReducer,
  article: articleReducer,
  singleArticle: singleArticleReducer,
  signupErrors: registerErrorsReducer,
  success,
  articles,
  user,
  articleReducer,
  createArticleReducer,
  toastr: toastrReducer,
  fetchCategoryReducer,
  updateArticlesReducer,
  profile: profileReducer,
});
