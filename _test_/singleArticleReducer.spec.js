import reducer from '../src/reducers/singleArticleReducer';
import * as actionTypes from '../src/actions/types';

describe('Login reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      article: {},
      loading: false,
      alert: '',
      rating: '',
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
  it('should set loading to true rating submit is clicked', () => {
    expect(reducer(initialState, {
      type: actionTypes.RATE_ARTICLE_START,
    })).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should update rating successful', () => {
    expect(reducer(initialState, {
      type: actionTypes.RATE_ARTICLE_SUCCESS, rating: {}, message: 'rating updated',
    })).toEqual({
      ...initialState,
      loading: false,
      rating: {},
      alert: 'rating updated',
    });
  });
  it('should set loading to false rating submit fails', () => {
    expect(reducer(initialState, {
      type: actionTypes.RATE_ARTICLE_FAILURE,
    })).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
