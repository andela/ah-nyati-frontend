import reducer from '../src/reducers/singleArticleReducer';
import * as actionTypes from '../src/actions/types';

describe('Login reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      article: {},
      loading: false,
    };
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should load before fetching article', () => {
    expect(reducer(initialState, {
      type: actionTypes.SET_LOADING,
    })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should successfully return an article', () => {
    expect(reducer(initialState, {
      type: actionTypes.VIEW_SINGLE_ARTICLE,
      payload: 'Some random article',
    })).toEqual({
      ...initialState,
      loading: false,
      article: 'Some random article',
    });
  });
});
