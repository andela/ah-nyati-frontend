import axios from '../config/axiosInstance';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRS, SET_CURRENT_USER } from './types';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const registerUser = (newUserDetails, history) => dispatch => axios.post('/auth/signup', newUserDetails)
  .then((res) => {
    const { token } = res.data;

    localStorage.setItem('jwtToken', token);

    setAuthToken(token);

    history.push('/dashboard');
  })
  .catch(err => dispatch({
    type: GET_ERRS,
    payload: err.response.data.message,
  }));
