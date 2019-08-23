
import * as types from '../../actions/category/types';


const initialState = {
  isLoading: false,
  categories: [],
  errors: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: state.categories.concat(action.payload),
      };
    case types.GET_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
