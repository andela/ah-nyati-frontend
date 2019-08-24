import reducer from '../src/reducers/success';
import * as actionTypes from '../src/actions/types';

describe('Register reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      loading: true,
    };
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should stop loading after a successful signup', () => {
    expect(reducer(initialState, {
      type: actionTypes.SUCCESS,
    })).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
