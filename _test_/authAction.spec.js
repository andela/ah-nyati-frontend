import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { SET_CURRENT_USER } from '../src/actions/types';
import mockLoginData from '../src/utils/mockStore';

const mockStore = configureMockStore([thunk]);
let store = mockStore();
const { successResponse, loginData } = mockLoginData;

describe('Login actions', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => moxios.uninstall());
  it('Returns success if login was successful', (done) => {
    moxios.stubRequest('/auth/login', {
      status: 200,
      response: successResponse,
    });
    const expectedActions = [
      {
        loginData,
        type: SET_CURRENT_USER,
      },
    ];
    store = mockStore({});
    store.dispatch({ type: SET_CURRENT_USER, loginData });
    expect(store.getActions()).toEqual(expectedActions);

    done();
  });
  it('should store in localstorage', (done) => {
    moxios.stubRequest('/auth/login', {
      status: 200,
      response: successResponse,
    });
    const expectedActions = [
      {
        loginData,
        type: SET_CURRENT_USER,
      },
    ];
    store = mockStore({});
    store.dispatch({ type: SET_CURRENT_USER, loginData });
    expect(localStorage.setItem('jwtToken', expectedActions));

    done();
  });
});
