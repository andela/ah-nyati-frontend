import errorReducer from '../src/reducers/errorReducer';
import {
  GET_ERRORS,
} from '../src/actions/types';

describe('Error reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  it('should return thrown error', () => {
    expect(
      errorReducer({}, {
        type: GET_ERRORS,
        payload: 'This is an error!',
      }),
    ).toEqual('This is an error!');
  });
  it('should return the initial state', () => {
    expect(errorReducer(undefined, {})).toEqual({});
  });

  it('should return state for default call', () => {
    expect(
      errorReducer(initialState, {
        type: '',
        payload: 'This is an error!',
      }),
    ).toEqual({});
  });
});
