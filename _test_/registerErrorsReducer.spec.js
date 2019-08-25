import reducer from '../src/reducers/registerErrorsReducer';
import * as actionTypes from '../src/actions/types';

describe('Register Errors reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = { errors: {}, loading: false };
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should load before getting errors', () => {
    expect(reducer(initialState, {
      type: actionTypes.SET_LOADING,
    })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should successfully get all errors', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_ERRS,
      payload: 'error',
    })).toEqual({ errors: 'error', loading: false });
  });
});
