import isEmpty from '../validations/isEmpty';
import {
  SET_CURRENT_USER, AUTH_LOADING, REMOVE_CURRENT_USER,
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      };
    case REMOVE_CURRENT_USER:
      return {
        ...initialState,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
