import errorReducer from '../src/reducers/errorReducer';
import {
  GET_ERRORS,
} from '../src/actions/types';

describe('Error reducer', () => {
  it('should return thrown error', () => {
    expect(
      errorReducer({}, {
        type: GET_ERRORS,
        payload: 'This is an error!',
      }),
    ).toEqual('This is an error!');
  });

  it('should return state for default call', () => {
    expect(
      errorReducer({}, {
        type: '',
        payload: 'This is an error!',
      }),
    ).toEqual({});
  });
});
