import axios from 'axios';
import {
  FETCH_ARTICLES,
  SET_LOADING,
  GET_ERRORS,
} from './types';

class ArticleActions {
  static fetchArticles = () => (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    return axios.get('https://ah-nyati-backend-staging.herokuapp.com/api/v1/articles?limit=5')
      .then((res) => {
        dispatch({
          type: FETCH_ARTICLES,
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
