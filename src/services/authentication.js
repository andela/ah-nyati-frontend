const testUrl = 'http://localhost:1202/api/v1/auth/';

export const resetEmail = (userEmail) => {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userEmail),
  };

  return fetch(`${testUrl}/sendResetToken`, config)
    .then(resp => resp.json())
    .then(resp => (resp))
    .catch(err => err);
};

export const setNewPassword = (newPasswordDetails) => {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPasswordDetails),
  };

  return fetch(`${testUrl}/resetPassword`, config)
    .then(resp => resp.json())
    .then(resp => (resp))
    .catch(err => err);
};

