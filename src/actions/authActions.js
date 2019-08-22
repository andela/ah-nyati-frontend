import { toast } from 'react-toastify';
import axios from '../config/axiosInstance';
import {
  GET_ERRORS, SET_CURRENT_USER,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loginUser = userData => dispatch => axios
  .post('/auth/login', userData)
  .then((res) => {
    // save token to local storage
    const { token, data } = res.data;
    // set token to local storage
    localStorage.setItem('jwtToken', token);
    // set token to Auth header
    setAuthToken(token);

    // Set current user
    dispatch(setCurrentUser(data[0]));
  })
  .catch((error) => {
    let { message } = error.response.data;
    if (error.response.status === 401) {
      message = {
        auth: error.response.data.message,
      };
      toast.error(error.response.data.message);
    }
    dispatch({
      type: GET_ERRORS,
      payload: message,
    });
  });

/**
 * @description - logs in a user his using social account details
 * @param {string} token - the request token
 * @param {object} data - the user login details
 */
export const socialLogin = (token, data) => (dispatch) => {
  localStorage.setItem('jwtToken', token);
  setAuthToken(token);

  dispatch(setCurrentUser(data));
};
