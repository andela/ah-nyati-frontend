import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { SET_CURRENT_USER, GET_ERRORS, AUTH_LOADING } from '../src/actions/types';
import mockLoginData from '../src/utils/loginMockStore';
import { loginUser, socialLogin } from '../src/actions/authActions';

const mockStore = configureMockStore([thunk]);
let store = mockStore();
const { successResponse, errorResponse } = mockLoginData;

describe('Login actions', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => moxios.uninstall());
  it('Returns failure if login was unsuccessful', (done) => {
    moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/auth/login', {
      status: 400,
      response: errorResponse,
    });
    const expectedActions = [
      {
        type: AUTH_LOADING,
      },
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
        type: AUTH_LOADING,
      },
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
  it('logs in a user using social account details', () => {
    const expectedActions = [
      {
        payload: successResponse.data[0],
        type: SET_CURRENT_USER,
      },
    ];
    store = mockStore({});
    store.dispatch(socialLogin('eyjdhdkkdjfk.nfhhgdsjjsggdhjey488uuu', successResponse.data[0]));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
