import reducer from '../src/reducers/profileReducer';
import { GET_PROFILE, PROFILE_LOADING, FETCH_PROFILE_ARTICLE } from '../src/actions/types';


describe('Profile reducer', () => {
  const initialState = {
    profiles: null,
    profileArticles: null,
    loading: false,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set loading to be true', () => {
    expect(reducer(initialState, {
      type: PROFILE_LOADING,
      payload: {},
    })).toEqual({
      ...initialState,
      profiles: null,
      profileArticles: null,
      loading: true,
    });
  });

  it('should successfully fetch a users profile from the store', () => {
    expect(reducer(initialState, {
      type: GET_PROFILE,
      payload: 'profiles',
    })).toEqual({
      ...initialState,
      loading: false,
      profiles: 'profiles',
    });
  });

  it('should successfully fetch all articles authored by a users from the store', () => {
    expect(reducer(initialState, {
      type: FETCH_PROFILE_ARTICLE,
      payload: 'profileArticles',
    })).toEqual({
      ...initialState,
      loading: false,
      profileArticles: 'profileArticles',
    });
  });
});
