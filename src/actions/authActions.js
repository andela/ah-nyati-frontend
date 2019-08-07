import { TEST_DISPATCH } from './types';

export const registerUser = (newUserDetails) => {
  return {
    type: TEST_DISPATCH,
    payload: newUserDetails,
  };
};

export const hello = 'hi';
