import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../src/actions/types';
import * as actions from '../src/actions/resetAction';
import axios from '../src/config/axiosInstance';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {};
let store = mockStore(initialState);

const userToken = 'nhfjdjskkkaa';
const userEmail = 'test@test.com';

describe('Auth Action Tests', () => {
  afterEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));

  it('should dispatch RESET_PASSWORD_EMAIL action', () => {
    store.dispatch(actions.resetEmailSuccessful());
    expect(store.getActions()).toContainEqual({ type: types.RESET_PASSWORD_EMAIL_SUCCESS });
  });

  it('should dispatch SET_NEW_PASSWORD action', () => {
    store.dispatch(actions.setNewPasswordSuccessful());
    expect(store.getActions()).toContainEqual({ type: types.SET_NEW_PASSWORD_SUCCESS });
  });

  it('should dispatch SET_NEW_PASSWORD_FAILURE action', () => {
    store.dispatch(actions.setNewPasswordFailure());
    expect(store.getActions()).toContainEqual({ type: types.SET_NEW_PASSWORD_FAILURE });
  });


  it('Returns success if reset password was successful', (done) => {
    moxios.stubRequest(`https://ah-nyati-backend-staging.herokuapp.com/api/v1/auth/resetPassword?resetToken=${userToken}&email=${userEmail}`, {
      status: 200,
      message: 'A reset code has been resent to your email',
    });
    const expectedActions = [
      {
        type: types.SET_NEW_PASSWORD,
      },
      {
        type: types.SET_NEW_PASSWORD_SUCCESS,
      },
    ];
    store = mockStore({});
    store.dispatch(actions.resetNewPassword('123456', userToken, userEmail));
    store.dispatch(actions.setNewPasswordSuccessful());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('Returns failure if reset email was unsuccessful', (done) => {
    moxios.stubRequest(`https://ah-nyati-backend-staging.herokuapp.com/api/v1/auth/resetPassword?resetToken=${userToken}&email=`, {
      status: 404,
      message: 'Email does not exist',
    });
    const expectedActions = [
      {
        type: types.SET_NEW_PASSWORD,
      },
      {
        type: types.RESET_PASSWORD_EMAIL_FAILURE,
      },
    ];
    store = mockStore({});
    store.dispatch(actions.resetNewPassword('123456', userToken, ''));
    store.dispatch(actions.resetEmailFailure());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('Returns failure if reset password was unsuccessful', (done) => {
    moxios.stubRequest(`https://ah-nyati-backend-staging.herokuapp.com/api/v1/auth/resetPassword?resetToken=${userToken}&email=${userEmail}`, {
      status: 400,
      message: 'Invalid Token',
    }, { overwriteRoutes: false });
    const expectedActions = [
      {
        type: types.SET_NEW_PASSWORD_FAILURE,
      },
    ];
    store = mockStore({});
    store.dispatch(actions.setNewPasswordFailure());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('Returns success if reset email was successful', (done) => {
    const userEmail1 = {
      email: 'test@test.com',
    };
    jest.spyOn(axios, 'post').mockResolvedValue({ data: { message: '' } } );
    
    const expectedActions = [
      {
        type: types.RESET_PASSWORD_EMAIL,
      },
      {
        type: types.RESET_PASSWORD_EMAIL_SUCCESS,
      },
    ];
    store.dispatch(actions.passwordResetEmail(userEmail1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });

  });

  it('Return failure if reset email was unsuccessful', (done) => {
    const userEmail1 = {
      email: '',
    };
    jest.spyOn(axios, 'post').mockRejectedValue({ response: { data: { message: '' } } } );
    
  
    const expectedActions = [
      {
        type: types.RESET_PASSWORD_EMAIL,
      },
      {
        type: types.RESET_PASSWORD_EMAIL_FAILURE,
      },
    ];
    
    store.dispatch(actions.passwordResetEmail(userEmail1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });

  });

  it('Return success if reset password was successful', (done) => {
    jest.spyOn(axios, 'post').mockResolvedValue({ data: { message: '' } } );
    
    
    const expectedActions = [
      {
        type: types.SET_NEW_PASSWORD,
      },
      {
        type: types.SET_NEW_PASSWORD_SUCCESS,
      },
    ];
    
    store.dispatch(actions.resetNewPassword('123456', userToken, userEmail))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Return failure if reset password was unsuccessful', (done) => {
    jest.spyOn(axios, 'post').mockRejectedValue({ response: { data: { message: '' } } } );
    

    const expectedActions = [
      {
        type: types.SET_NEW_PASSWORD,
      },
      {
        type: types.SET_NEW_PASSWORD_FAILURE,
      },
    ];
    
    store.dispatch(actions.resetNewPassword('123456', userToken, ''))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

});
