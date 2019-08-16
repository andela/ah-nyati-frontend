import reducer from '../src/reducers/resetReducer';
import * as actionTypes from '../src/actions/types';

describe('Reset Password reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      redirect: false,
      isLoading: false,
    };
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set isLoading to true when password email reset button is clicked', () => {
    expect(reducer(initialState, {
      type: actionTypes.RESET_PASSWORD_EMAIL,
    })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should set redirect to true upon a successful password email reset', () => {
    expect(reducer(initialState, {
      type: actionTypes.RESET_PASSWORD_EMAIL_SUCCESS,
    })).toEqual({
      ...initialState,
      isLoading: false,
      redirect: true,
    });
  });

  it('should set isLoading to true when password reset button is clicked', () => {
    expect(reducer(initialState, {
      type: actionTypes.SET_NEW_PASSWORD,
    })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should set redirect to true upon a successful password reset', () => {
    expect(reducer(initialState, {
      type: actionTypes.SET_NEW_PASSWORD_SUCCESS,
    })).toEqual({
      ...initialState,
      isLoading: false,
      redirect: true,
    });
  });

  it('should return the initial state upon reset password email failure', () => {
    expect(reducer(initialState, {
      type: actionTypes.RESET_PASSWORD_EMAIL_FAILURE,
    })).toEqual({
      ...initialState,
    });
  });

  it('should return the initial state upon reset password failure', () => {
    expect(reducer(initialState, {
      type: actionTypes.SET_NEW_PASSWORD_FAILURE,
    })).toEqual({
      ...initialState,
    });
  });
});
