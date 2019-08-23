import { VIEW_SINGLE_ARTICLE, SET_LOADING } from '../actions/types';

const initialState = { article: {}, loading: false };

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
    default:
      return state;
  }
}
