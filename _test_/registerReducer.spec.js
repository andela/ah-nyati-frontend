import reducer from '../src/reducers/registerReducer';

describe('Register reducer', () => {
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
});
