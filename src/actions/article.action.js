import { toast } from 'react-toastify';
import {
  RATE_ARTICLE_START,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_FAILURE,
} from './types';
import axios from '../config/axiosInstance';

export const rateArticleStart = () => ({
  type: RATE_ARTICLE_START,
});

export const rateArticleSuccess = rating => ({
  type: RATE_ARTICLE_SUCCESS,
  rating,
});

export const rateArticleFailure = () => ({
  type: RATE_ARTICLE_FAILURE,
});

export const articleRating = (slug, value) => (dispatch) => {
  const dataValue = {
    value,
  };
  dispatch(rateArticleStart());
  return axios
    .post(`/articles/rate/${slug}`, dataValue)
    .then((res) => {
      const { data, message } = res.data;
      dispatch(rateArticleSuccess(data[0]));
      toast.success(message);
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(rateArticleFailure());
      toast.error(message);
    });
};
