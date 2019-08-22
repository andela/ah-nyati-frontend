import { FETCH_ALL_ARTICLE } from '../actions/types';

const initState = {
  isLoading: true,
  articles: '',
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_ALL_ARTICLE:
      return {
        ...state,
        isLoading: false,
        articles: action.payload,
      };
    default:
      return state;
  }
}
