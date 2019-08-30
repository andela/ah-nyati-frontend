import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../src/config/axiosInstance';
import { GET_PROFILE, PROFILE_LOADING, FETCH_PROFILE_ARTICLE } from '../src/actions/types';
import { successProfileResponse, successArticleResponse } from '../src/utils/mockProfileData';
import { userProfiles, userArticles } from '../src/actions/profileActions';

const mockStore = configureMockStore([thunk]);
let store = mockStore();

describe('Profile actions', () => {
  beforeEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));
  const userId = 71;

  it('Returns success if profile was fetched succesfully', (done) => {
    moxios.stubRequest(`https://ah-nyati-backend-staging.herokuapp.com/api/v1/user/profiles/${userId}`, {
      status: 200,
      response: {
        data: [
          {},
        ],
      },
    });
    const expectedActions = [
      {
        type: PROFILE_LOADING,
      },
      {
        payload: {},
        type: GET_PROFILE,
      },
    ];
    store = mockStore({});
    store.dispatch(userProfiles(userId)).then(() => {
      done();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Returns success if articles was fetched succesfully', (done) => {
    moxios.stubRequest(
      `https://ah-nyati-backend-staging.herokuapp.com/api/v1/articles/user/${userId}?limit=6&currentPage=1`, {
        status: 200,
        response: {
          data: [
            {},
          ],
        },
      },
    );
    const expectedActions = [
      {
        payload: {},
        type: FETCH_PROFILE_ARTICLE,
      },
    ];
    store = mockStore({});
    store.dispatch(userArticles(userId, 1)).then(() => {
      done();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
