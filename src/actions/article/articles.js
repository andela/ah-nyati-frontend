import * as types from './types';
import axiosWithAuth from '../../api/axios';


export const createArticleStart = () => ({
  type: types.CREATE_ARTICLE_START,
});

export const createArticleFailed = payload => ({
  type: types.CREATE_ARTICLE_FAILURE,
  payload,
});

export const createArticleSuccess = payload => ({
  type: types.CREATE_ARTICLE_SUCCESS,
  payload,
});

export const createArticle = articleData => (dispatch) => {
  const form = new FormData();
  Object.keys(articleData).forEach(key => form.append([key], articleData[key]));
  dispatch(createArticleStart());
  return axiosWithAuth().post('/articles', form).then(({ data, status }) => {
    dispatch(createArticleSuccess(data.data));
    return status;
  }).catch((err) => {
    dispatch(createArticleFailed({ message: err.response.data.message }));
  });
};
