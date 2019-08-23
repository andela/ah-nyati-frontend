import errorReducer from '../src/reducers/getUserReducer';
import {
  GET_CURRENT_USER,
} from '../src/actions/types';


describe('Error reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      payload: {},
    };
  });

  it('should return thrown error', () => {
    expect(
      errorReducer({}, {
        type: GET_CURRENT_USER,
        payload: {},
      }),
    ).toEqual({ });
  });
});
