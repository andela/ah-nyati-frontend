
import * as types from '../../actions/article/types';


const initialState = {
  isLoading: false,
  articles: [],
  errors: null,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ARTICLE_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: state.articles.concat(action.payload),
      };
    case types.CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;
