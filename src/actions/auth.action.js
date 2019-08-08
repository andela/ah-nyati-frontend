import { notify } from 'react-notify-toast';
import { RESET_PASSWORD_EMAIL, RESET_PASSWORD_EMAIL_FAILURE, SET_NEW_PASSWORD, SET_NEW_PASSWORD_FAILURE } from './types';
import { resetEmail, setNewPassword } from '../services/authentication';

export const resetEmailSuccessful = () => ({
  type: RESET_PASSWORD_EMAIL,
});
export const resetEmailFailure = () => ({
  type: RESET_PASSWORD_EMAIL_FAILURE,
});

export const passwordReset = userEmail => dispatch => resetEmail(userEmail).then((res) => {
  if (res.status >= 400) {
    dispatch(resetEmailFailure());
    notify.show((res.message), 'error');
  }
  if (res.status === 200) {
    dispatch(resetEmailSuccessful());
    notify.show((res.message), 'success');
  }
});
export const setNewPasswordSuccessful = () => ({
  type: SET_NEW_PASSWORD,
});

export const setNewPasswordFailure = () => ({
  type: SET_NEW_PASSWORD_FAILURE,
});

export const newPassword = newPasswordDetails => dispatch => setNewPassword(newPasswordDetails).then((res) => {
  if (res.status >= 400) {
    dispatch(setNewPasswordFailure());
    notify.show((res.message), 'error');
  }
  if (res.status === 200) {
    dispatch(setNewPasswordSuccessful());
    notify.show((res.message), 'success');
  }
});
