import axios from 'axios';
import {
  FETCH_ARTICLES,
  SET_LOADING,
  GET_ERRORS,
  SET_CURRENT_ARTICLES,
} from './types';

class ArticleActions {
  static fetchArticles = (limit, page) => (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    return axios.get(`https://ah-nyati-backend-staging.herokuapp.com/api/v1/articles?limit=${limit}&currentPage=${page}`)
      .then((res) => {
        dispatch({
          type: FETCH_ARTICLES,
          payload: {
            articles: res.data.data[0].articles,
            totalCount: res.data.data[0].totalArticles,
          },
        });
        dispatch({
          type: SET_CURRENT_ARTICLES,
          payload: res.data.data[0].articles,
        });
      })
      .catch(error => dispatch({
        type: GET_ERRORS,
        payload: error.message,
      }));
  };

  static setLoading = () => ({
    type: SET_LOADING,
  });
}

export default ArticleActions;
