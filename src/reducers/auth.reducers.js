import {
  RESET_PASSWORD_EMAIL, RESET_PASSWORD_EMAIL_FAILURE, SET_NEW_PASSWORD, SET_NEW_PASSWORD_FAILURE,
} from '../actions/types';

const initialState = {
  redirect: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_EMAIL:
      return {
        ...state,
        redirect: true,
      };
    case RESET_PASSWORD_EMAIL_FAILURE:
      return { ...state };
    case SET_NEW_PASSWORD:
      return {
        ...state,
        redirect: true,
      };
    case SET_NEW_PASSWORD_FAILURE:
      return { ...state };
    default:
      return state;
  }
};


export default auth;
