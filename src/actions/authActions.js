import { toast } from 'react-toastify';
import axios from '../api/axios';
import {
  GET_ERRORS, SET_CURRENT_USER, AUTH_LOADING, REMOVE_CURRENT_USER,
} from './types';
import setAuthToken from '../utils/setAuthToken';


// set logged in user
export const setLoginLoading = () => ({
  type: AUTH_LOADING,
});

// set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

// remove logged in user
export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER,
});

export const logoutError = error => ({
  type: GET_ERRORS,
  payload: error.message,
});

export const loginUser = userData => (dispatch) => {
  dispatch(setLoginLoading());
  return axios()
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
};

export const logoutUser = (history, user) => (dispatch) => {
  return axios()
    .post('/auth/logout', user)
    .then(() => {
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('user');
      dispatch(removeCurrentUser());
      history.push('/');
    })
    .catch(error => dispatch(logoutError(error)));
};

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
