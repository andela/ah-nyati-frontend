import { toast } from 'react-toastify';
import axios from '../config/axiosInstance';
import
{
  SET_NEW_PASSWORD_SUCCESS, RESET_PASSWORD_EMAIL_SUCCESS,
  RESET_PASSWORD_EMAIL, RESET_PASSWORD_EMAIL_FAILURE, SET_NEW_PASSWORD, SET_NEW_PASSWORD_FAILURE,
} from './types';


export const resetEmail = () => ({
  type: RESET_PASSWORD_EMAIL,
});

export const resetEmailSuccessful = () => ({
  type: RESET_PASSWORD_EMAIL_SUCCESS,
});
export const resetEmailFailure = () => ({
  type: RESET_PASSWORD_EMAIL_FAILURE,
});

export const passwordResetEmail = userEmail => (dispatch) => {
  dispatch(resetEmail());
  return axios
    .post('/auth/sendResetToken', userEmail)
    .then((res) => {
      const { data: { message } } = res;
      toast.success(message);
      dispatch(resetEmailSuccessful());
    })
    .catch((error) => {
      const { message } = error.response.data;
      toast.error(message);
      dispatch(resetEmailFailure());
    });
};


export const setNewPassword = () => ({
  type: SET_NEW_PASSWORD,
});

export const setNewPasswordSuccessful = () => ({
  type: SET_NEW_PASSWORD_SUCCESS,
});

export const setNewPasswordFailure = () => ({
  type: SET_NEW_PASSWORD_FAILURE,
});

export const resetNewPassword = (password, userToken, userEmail) => (dispatch) => {
  dispatch(setNewPassword());
  return axios
    .post(`/auth/resetPassword?resetToken=${userToken}&email=${userEmail}`, password)
    .then((res) => {
      const { data: { message } } = res;
      dispatch(setNewPasswordSuccessful());
      toast.success(message);
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(setNewPasswordFailure());
      toast.error(message);
    });
};
