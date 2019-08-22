import reducer from '../src/reducers/userReducer';
import * as actionTypes from '../src/actions/types';

describe('User password', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      isLoading: false,
      profile: {},
      followers: [],
      followees: [],
      articles: [],
      published: [],
      draft: [],
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should set isLoading to true when the page load', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_PROFILE_START,
    })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should set profile with the users profile', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_PROFILE_SUCCESS, payload: {},
    })).toEqual({
      ...initialState,
      isLoading: false,
      profile: {},
    });
  });

  it('should return  the initial state', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_PROFILE_FAILURE,
    })).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  it('should set loading to true when get follower api is fetching', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_FOLLOWERS_START,
    })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should return followers if successful', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_FOLLOWERS_SUCCESS, payload: [],
    })).toEqual({
      ...initialState,
      isLoading: false,
      followers: [],
    });
  });

  it('should set loading to false when get followers api fails', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_FOLLOWERS_FAILURE,
    })).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  it('should set loading to true when get followees api start', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_FOLLOWEE_START,
    })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should return followees when get followees api succeeds', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_FOLLOWEE_SUCCESS, payload: [],
    })).toEqual({
      ...initialState,
      isLoading: false,
      followees: [],
    });
  });

  it('should set loading to false when get followees api fails', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_FOLLOWEE_FAILURE,
    })).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  it('should set loading to true when get articles api starts', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_ARTICLES_START,
    })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should return articles when get articles api succeeds', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_ARTICLES_SUCCESS, payload: [],
    })).toEqual({
      ...initialState,
      isLoading: false,
      articles: [],
    });
  });

  it('should set loading to false when get articles api fails', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_ARTICLES_FAILURE,
    })).toEqual({
      ...initialState,
      isLoading: false,
    });
  });
  it('should set loading to true when get published articles api starts', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_PUBLISHED_ARTICLES_START,
    })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should return articles when get published articles api succeeds', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_PUBLISHED_ARTICLES_SUCCESS, payload: [],
    })).toEqual({
      ...initialState,
      isLoading: false,
      published: [],
    });
  });

  it('should set loading to false when get published articles api fails', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_PUBLISHED_ARTICLES_FAILURE,
    })).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  it('should set loading to true when get draft articles api starts', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_DRAFT_ARTICLES_START,
    })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should return articles when get draft articles api succeeds', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_DRAFT_ARTICLES_SUCCESS, payload: [],
    })).toEqual({
      ...initialState,
      isLoading: false,
      draft: [],
    });
  });

  it('should set loading to false when get draft articles api fails', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_AUTH_USER_DRAFT_ARTICLES_FAILURE,
    })).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  it('should set loading to true when edit profile api starts', () => {
    expect(reducer(initialState, {
      type: actionTypes.EDIT_AUTH_USER_PROFILE_START,
    })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it('should return articles when edit profile api succeeds', () => {
    expect(reducer(initialState, {
      type: actionTypes.EDIT_AUTH_USER_PROFILE_SUCCESS, payload: {},
    })).toEqual({
      ...initialState,
      isLoading: false,
      profile: {},
    });
  });
  it('should set loading to false when edit profile api fails', () => {
    expect(reducer(initialState, {
      type: actionTypes.EDIT_AUTH_USER_PROFILE_FAILURE,
    })).toEqual({
      ...initialState,
      isLoading: false,
    });
  });
});
