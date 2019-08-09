import {
  FETCH_ARTICLES,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  allArticles: [],
  loading: false,
};

const articleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        allArticles: payload,
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
