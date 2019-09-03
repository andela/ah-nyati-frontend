import {
  FETCH_ARTICLES,
  SET_LOADING,
  SET_CURRENT_ARTICLES,
  DELETE_ARTICLE_SUCCESS,
} from '../actions/types';

const initialState = {
  totalArticles: 0,
  currentArticles: [],
  allArticles: [],
  loading: false,
  response: null,
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

    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        response: payload,
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
