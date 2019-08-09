import jwtDecode from 'jwt-decode';
import axios from '../config/axiosInstance';
import { GET_ERRORS, SET_CURRENT_USER, TEST_DISPATCH } from './types';
import setAuthToken from '../utils/setAuthToken';
// import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

export const registerUser = (newUserDetails) => {
  return {
    type: TEST_DISPATCH,
    payload: newUserDetails,
  };
};

// set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loginUser = userData => (dispatch) => {
  axios
    .post('/auth/login', userData)
    .then((res) => {
      // save token to local storage
      const { token } = res.data;
      // set token to local storage
      localStorage.setItem('jwtToken', token);
      // set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data.message,
    }));
};
