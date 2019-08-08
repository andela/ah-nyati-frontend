import {
  SET_NEW_PASSWORD_SUCCESS, RESET_PASSWORD_EMAIL_SUCCESS,
  RESET_PASSWORD_EMAIL, RESET_PASSWORD_EMAIL_FAILURE, SET_NEW_PASSWORD, SET_NEW_PASSWORD_FAILURE,
} from '../actions/types';

const initialState = {
  redirect: false,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_EMAIL:
      return {
        ...state,
        isLoading: true,
      };
    case SET_NEW_PASSWORD:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_PASSWORD_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        redirect: true,
      };
    case RESET_PASSWORD_EMAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case SET_NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        redirect: true,
      };
    case SET_NEW_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};


export default reducer;
