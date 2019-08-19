import registerErrorsReducer from '../src/reducers/registerErrorsReducer';
import * as actionTypes from '../src/actions/types';

describe('Register Errors reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });
  it('should return the initial state', () => {
    expect(registerErrorsReducer(undefined, {})).toEqual({});
  });

  it('should successfully get all errors', () => {
    expect(registerErrorsReducer(initialState, {
      type: actionTypes.GET_ERRS,
      payload: 'error',
    })).toEqual('error');
  });
});
