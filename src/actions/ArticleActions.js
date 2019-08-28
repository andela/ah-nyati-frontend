import axios from 'axios';
import {
  FETCH_ARTICLES,
  SET_LOADING,
  GET_ERRORS,
  SET_CURRENT_ARTICLES,
  VIEW_SINGLE_ARTICLE,
  GET_ARTICLES_BY_TAG,
} from './types';

const baseUrl = 'https://ah-nyati-backend-staging.herokuapp.com/api/v1';

class ArticleActions {
  static fetchArticles = (limit, page) => (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    return axios.get(`${baseUrl}/articles?limit=${limit}&currentPage=${page}`)
      .then((res) => {
        dispatch({
          type: FETCH_ARTICLES,
          payload: {
            articles: res.data.data[0].allArticles,
            totalCount: res.data.data[0].totalArticles,
          },
        });
        dispatch({
          type: SET_CURRENT_ARTICLES,
          payload: res.data.data[0].allArticles,
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

  static viewArticle = (slug, history) => (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    return axios.get(`${baseUrl}/articles/${slug}`)
      .then((res) => {
        dispatch({
          type: VIEW_SINGLE_ARTICLE,
          payload: {
            articleBody: res.data.data[0].article.body,
            title: res.data.data[0].article.title,
            slug: res.data.data[0].article.slug,
            imageUrl: res.data.data[0].article.imageUrl,
            views: res.data.data[0].article.views,
            read: res.data.data[0].article.read,
            readTime: res.data.data[0].readTime,
            author: res.data.data[0].article.User.userName,
            userId: res.data.data[0].article.userId,
            tags: res.data.data[0].tag,
          },
        });
      })
      .catch((err) => {
        if (err.response.status === 404) {
          return history.push('/*');
        }
        return dispatch({
          type: GET_ERRORS,
          payload: err.message,
        });
      });
  }

  static getArticlesByTag = (tag, page = 1) => (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    return axios.get(`${baseUrl}/searcharticles?tag=${tag}&limit=${5}&currentPage=${page}`)
      .then((res) => {
        return (
          dispatch({
            type: GET_ARTICLES_BY_TAG,
            payload: res.data.data[0],
          })
        );
      })
      .catch(error => dispatch({
        type: GET_ERRORS,
        payload: error.message,
      }));
  }
}

export default ArticleActions;
