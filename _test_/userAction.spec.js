import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../src/actions/types';
import * as actions from '../src/actions/userActions';
import axios from '../src/config/axiosInstance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {};
let store = mockStore(initialState);

const userId = 2;
const userToken = 'nhfjdjskkkaa';

describe('User Action Tests', () => {
  afterEach(() => {
    moxios.install(axios);
    store.clearActions();
  });
  afterEach(() => moxios.uninstall(axios));
  
  it('should dispatch GET_AUTH_USER_PROFILE action', () => {
    store.dispatch(actions.getAuthUserProfileStart());
    expect(store.getActions()).toContainEqual({ type: types.GET_AUTH_USER_PROFILE_START });
  });
  it('Returns success if user profile was successfully fetched', (done) => {
    moxios.stubRequest(`https://ah-nyati-backend-staging.herokuapp.com/api/v1/user/profiles/${userId}`, {
      status: 200,
      data: [],
    });
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_PROFILE_START,
      },
      {
        type: types.GET_AUTH_USER_PROFILE_SUCCESS,
      },
      {
        type: types.GET_AUTH_USER_PROFILE_FAILURE,
      },
    ];
    store = mockStore({});
    store.dispatch(actions.authUserProfile(userToken));
    store.dispatch(actions.getAuthUserProfileSuccess());
    store.dispatch(actions.getAuthUserProfileFailure());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('Returns success if get user profile was successful', (done) => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { data: {} } });
   
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_PROFILE_START,
      },
      {
        type: types.GET_AUTH_USER_PROFILE_SUCCESS,
      },
    ];
    store.dispatch(actions.authUserProfile(userId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Returns success if get user followers was successful', (done) => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { data: {} } });
   
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_FOLLOWERS_START,
      },
      {
        type: types.GET_AUTH_USER_FOLLOWERS_FAILURE,
      },
    ];
    store.dispatch(actions.getAuthUserFollowers(userId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Return failure if get user profile was unsuccessful', (done) => {
    jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: { message: '' } } } );
   
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_PROFILE_START,
      },
      {
        type: types.GET_AUTH_USER_PROFILE_FAILURE,
      },
    ];
    store.dispatch(actions.authUserProfile(userId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Return failure if get user followers was unsuccessful', (done) => {
    jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: { message: '' } } } );
   
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_FOLLOWERS_START,
      },
      {
        type: types.GET_AUTH_USER_FOLLOWERS_FAILURE,
      },
    ];
    store.dispatch(actions.getAuthUserFollowers(userToken))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('Returns success if get user followees was successful', (done) => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { data: [{followees: []}] } });

    const expectedActions = [
      {
        type: types.GET_AUTH_USER_FOLLOWEE_START,
      },
      {
        type: types.GET_AUTH_USER_FOLLOWEE_SUCCESS,
        payload: [],
      },
    ];
    store.dispatch(actions.getAuthUserFollowee(userId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Return failure if get user followees was unsuccessful', (done) => {
    jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: { message: '' } } } );

    const expectedActions = [
      {
        type: types.GET_AUTH_USER_FOLLOWEE_START,
      },
      {
        type: types.GET_AUTH_USER_FOLLOWEE_FAILURE,
      },
    ];
    store.dispatch(actions.getAuthUserFollowee(userToken))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  

  it('Returns success if get user articles was successful', (done) => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { data: {} } });
    const userName = '';
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_ARTICLES_START,
      },
      {
        type: types.GET_AUTH_USER_ARTICLES_SUCCESS,
      },
    ];
    store.dispatch(actions.getAuthUserArticles(userName))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Return failure if get user articles was unsuccessful', (done) => {
    jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: { message: '' }, status: 404 } } );
    const userName = '';
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_ARTICLES_START,
      },
      {
        type: types.GET_AUTH_USER_ARTICLES_FAILURE,
      },
    ];
    store.dispatch(actions.getAuthUserArticles(userName))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('Returns success if get user published articles was successful', (done) => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { data: {} } });
    const userid = 1;
    const offset = 2;
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_PUBLISHED_ARTICLES_START,
      },
      {
        type: types.GET_AUTH_USER_PUBLISHED_ARTICLES_SUCCESS,
      },
    ];
    store.dispatch(actions.getAuthUserPublishedArticles(userid, offset))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Return failure if get user published articles was unsuccessful', (done) => {
    jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: { message: '' }, status: 404 } } );
    const userid = 1;
    const offset = 2;
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_PUBLISHED_ARTICLES_START,
      },
      {
        type: types.GET_AUTH_USER_PUBLISHED_ARTICLES_FAILURE,
      },
    ];
    store.dispatch(actions.getAuthUserPublishedArticles(userid, offset))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('Returns success if get user draft articles was successful', (done) => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { data: {} } });
    const userid = 1;
    const offset = 2;
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_DRAFT_ARTICLES_START,
      },
      {
        type: types.GET_AUTH_USER_DRAFT_ARTICLES_SUCCESS,
      },
    ];
    store.dispatch(actions.getAuthUserDraftArticles(userid, offset))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Return failure if get user draft articles was unsuccessful', (done) => {
    jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: { message: '' }, status: 404 } } );
    const userid = 1;
    const offset = 2;
    const expectedActions = [
      {
        type: types.GET_AUTH_USER_DRAFT_ARTICLES_START,
      },
      {
        type: types.GET_AUTH_USER_DRAFT_ARTICLES_FAILURE,
      },
    ];
    store.dispatch(actions.getAuthUserDraftArticles(userid, offset))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Returns success if edit user profile was successful', (done) => {
    jest.spyOn(axios, 'put').mockResolvedValue({ data: { data: [[]], message: '' } });
    const newProfileDetails = {
      firstName: '',
      lastName: '',
      userName: '',
    };
    const userid = 1;
    const expectedActions = [
      {
        type: types.EDIT_AUTH_USER_PROFILE_START,
      },
      {
        type: types.EDIT_AUTH_USER_PROFILE_SUCCESS,
        payload: [],
      },
    ];
    store.dispatch(actions.editAuthUserProfile(newProfileDetails, userid))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Returns failure if edit user profile was unsuccessful', (done) => {
    jest.spyOn(axios, 'put').mockRejectedValue({ response: { data: { message: '' }} });
    const newProfileDetails = {
      firstName: '',
      lastName: '',
      userName: '',
    };
    const userid = 1;
    const expectedActions = [
      {
        type: types.EDIT_AUTH_USER_PROFILE_START,
      },
      {
        type: types.EDIT_AUTH_USER_PROFILE_FAILURE,

      },
    ];
    store.dispatch(actions.editAuthUserProfile(newProfileDetails, userid))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
