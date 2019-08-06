import axios from '../config/axiosInstance';
import { FETCH_ALL_ARTICLE } from './types';

// eslint-disable-next-line import/prefer-default-export
export const getAllArticles = (limit, page) => (dispatch) => {
  axios.get(`/articles?limit=${limit}&currentPage=${page}`)
    .then(res => dispatch({
      type: FETCH_ALL_ARTICLE,
      payload: res.data.data[0],
    }))
    .catch(err => console.log(err));
};
