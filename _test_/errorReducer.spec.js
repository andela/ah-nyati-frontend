import errorReducer from '../src/reducers/errorReducer';
import {
  GET_ERRORS, LOGIN_LOADING,
} from '../src/actions/types';

describe('Error reducer', () => {
  it('should set loading to true before displaying error', () => {
    expect(
      errorReducer({}, {
        type: LOGIN_LOADING,
        loading: true,
      }),
    ).toEqual({
      loading: true,
    });
  });

  it('should return thrown error', () => {
    expect(
      errorReducer({}, {
        type: GET_ERRORS,
        payload: 'This is an error!',
      }),
    ).toEqual({ error: 'This is an error!', loading: false });
  });
  it('should return the initial state', () => {
    expect(errorReducer(undefined, {})).toEqual(
      {
        error: {
          email: '',
          password: '',
        },
        loading: false,
      },
    );
  });
});
