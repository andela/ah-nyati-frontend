import errorReducer from '../src/reducers/errorReducer';
import * as actionTypes from '../src/actions/types';

describe('Error reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
    };
  });
  it('should return the initial state', () => {
    expect(errorReducer(undefined, {})).toEqual({});
  });

  it('should successfully get all errors', () => {
    expect(errorReducer(initialState, {
      type: actionTypes.GET_ERRORS,
      payload: 'error',
    })).toEqual('error');
  });
});
