
import * as types from '../../actions/article/types';


const initialState = {
  isLoading: false,
  articles: [],
  errors: null,
};

const updateArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ARTICLE_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: state.articles.concat(action.payload),
      };
    case types.UPDATE_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default updateArticlesReducer;
