import * as types from './types';
import axiosWithAuth from '../../api/axios';


export const updateArticleStart = () => ({
  type: types.UPDATE_ARTICLE_START,
});

export const updateArticleFailed = payload => ({
  type: types.UPDATE_ARTICLE_FAILURE,
  payload,
});

export const updateArticleSuccess = payload => ({
  type: types.UPDATE_ARTICLE_SUCCESS,
  payload,
});

export const updateArticle = (slug, articleData) => (dispatch) => {
  const form = new FormData();
  Object.keys(articleData).forEach(key => form.append([key], articleData[key]));
  dispatch(updateArticleStart());
  return axiosWithAuth().patch(`/articles/${slug}`, form).then(({ data, status }) => {
    dispatch(updateArticleSuccess(data.data));
    return status;
  }).catch((err) => {
    dispatch(updateArticleFailed({ message: err.response.data.message }));
  });
};
