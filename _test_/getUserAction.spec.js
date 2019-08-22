import '@babel/polyfill';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import mockUser from '../src/utils/mockStore';
import getUser from '../src/actions/getUserAction';
import axios from '../src/config/axiosInstance';
import { GET_CURRENT_USER } from '../src/actions/types';

const mockStore = configureMockStore([thunk]);
let store = mockStore();
const { mockUserResponse } = mockUser;

describe('Get User', () => {
  beforeEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));
  it('Returns articles', async () => {
    await moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/user/profile/nyati', {
      status: 200,
      response: mockUserResponse,
    });

    store = mockStore({});
    await store.dispatch(getUser());
    expect(store.getActions()).toEqual([]);
  });
});
