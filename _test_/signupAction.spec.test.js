import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { GET_ERRS } from '../src/actions/types';
import mockRegisterData from '../src/utils/registerMockStore';
import { registerUser } from '../src/actions/registerActions';
import axios from '../src/config/axiosInstance';

const mockStore = configureMockStore([thunk]);
let store = mockStore();
const { successResponse, errorResponse } = mockRegisterData;

describe('Register actions', () => {
  beforeEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));

  it('Returns failure if signup was unsuccessful', (done) => {
    moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/auth/signup', {
      status: 400,
      response: errorResponse,
    });
    const expectedActions = [
      {
        payload: errorResponse.message,
        type: GET_ERRS,
      },
    ];
    store = mockStore({});
    store.dispatch(registerUser())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Returns success if signup was successful', (done) => {
    moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/auth/signup', {
      status: 201,
      response: successResponse,
    });
    const expectedActions = [];

    store = mockStore({});
    const history = { push: jest.fn() };
    store.dispatch(registerUser(null, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
