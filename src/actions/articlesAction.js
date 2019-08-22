import axios from '../config/axiosInstance';
import { FETCH_ALL_ARTICLE } from './types';

const getAllArticles = (page = 1) => (dispatch) => {
  axios.get(`/articles?limit=${5}&currentPage=${page}`)
    .then(res => dispatch({
      type: FETCH_ALL_ARTICLE,
      payload: res.data.data[0],
    }))
    .catch(err => console.log(err));
};

export default getAllArticles;
