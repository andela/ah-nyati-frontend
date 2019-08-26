import axios from '../config/axiosInstance';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRS, SIGNUP_LOADING, SUCCESS } from './types';

export const success = () => ({
  type: SUCCESS,
});

export const registerUser = (newUserDetails, history) => (dispatch) => {
  dispatch({
    type: SIGNUP_LOADING,
  });
  return axios.post('/auth/signup', newUserDetails)
    .then((res) => {
      const { token } = res.data;

      localStorage.setItem('jwtToken', token);

      setAuthToken(token);

      history.push('/dashboard');
      dispatch(success());
    })
    .catch(err => dispatch({
      type: GET_ERRS,
      payload: err.response.data.message,
    }));
};
