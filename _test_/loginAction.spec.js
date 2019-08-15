import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { SET_CURRENT_USER, GET_ERRORS } from '../src/actions/types';
import mockLoginData from '../src/utils/loginMockStore';
import { loginUser } from '../src/actions/authActions';
import axios from '../src/config/axiosInstance';

const mockStore = configureMockStore([thunk]);
let store = mockStore();
const { successResponse, errorResponse } = mockLoginData;

describe('Login actions', () => {
  beforeEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));
  it('Returns failure if login was unsuccessful', (done) => {
    moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/auth/login', {
      status: 400,
      response: errorResponse,
    });
    const expectedActions = [
      {
        payload: errorResponse.message,
        type: GET_ERRORS,
      },
    ];
    store = mockStore({});
    store.dispatch(loginUser())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('Returns success if login was successful', (done) => {
    moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/auth/login', {
      status: 200,
      response: successResponse,
    });
    const expectedActions = [
      {
        payload: successResponse.data[0],
        type: SET_CURRENT_USER,
      },
    ];
    store = mockStore({});
    store.dispatch(loginUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
