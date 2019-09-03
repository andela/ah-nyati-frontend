import {
  VIEW_SINGLE_ARTICLE,
  SET_LOADING,
  RATE_ARTICLE_START,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_FAILURE,
} from '../actions/types';

const initialState = {
  article: {},
  loading: false,
  rating: '',
  alert: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case VIEW_SINGLE_ARTICLE:
      return {
        ...state,
        loading: false,
        article: action.payload,
      };
    case RATE_ARTICLE_START:
      return {
        ...state,
        loading: true,
      };
    case RATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        rating: action.rating,
        alert: action.message,
      };
    case RATE_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
