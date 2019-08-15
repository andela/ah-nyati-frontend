import reducer from '../src/reducers/authReducer';
import * as actionTypes from '../src/actions/types';

describe('Login reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      isAuthenticated: false,
      user: {},
    };
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should successfully store the token upon login', () => {
    expect(reducer(initialState, {
      type: actionTypes.SET_CURRENT_USER,
      payload: 'Some random User',
    })).toEqual({
      ...initialState,
      isAuthenticated: true,
      user: 'Some random User',
    });
  });
});
