import { GET_ERRS, SIGNUP_LOADING } from '../actions/types';

const initialState = { loading: false, errors: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ERRS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
