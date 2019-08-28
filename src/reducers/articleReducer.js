import {
  FETCH_ARTICLES,
  SET_LOADING,
  SET_CURRENT_ARTICLES,
  GET_ARTICLES_BY_TAG,
} from '../actions/types';

const initialState = {
  totalArticles: 0,
  currentArticles: [],
  articlesByTag: [],
  allArticles: [],
  loading: false,
};

const articleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        allArticles: state.allArticles.concat(payload.articles),
        totalArticles: payload.totalCount,
        loading: false,
      };

    case SET_CURRENT_ARTICLES:
      return {
        ...state,
        currentArticles: payload,
        loading: false,
      };

    case GET_ARTICLES_BY_TAG:
      return {
        ...state,
        articlesByTag: payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default articleReducer;
