import { GET_ERRORS, LOGIN_LOADING } from '../actions/types';

const initialState = {
  error: {
    email: '',
    password: '',
  },
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
