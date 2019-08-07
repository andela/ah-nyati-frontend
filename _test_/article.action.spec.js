import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../src/actions/types';
import * as actions from '../src/actions/article.action';
import axios from '../src/config/axiosInstance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {};
const store = mockStore(initialState);


describe('rate Article Tests', () => {
  afterEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));

  it('Returns success if rate article was successful', (done) => {
    const dataValue = {
      value: 3,
    };
    jest.spyOn(axios, 'post').mockResolvedValue({ data: { message: '', data: {} } });
    
    const expectedActions = [
      {
        type: types.RATE_ARTICLE_START,
      },
      {
        type: types.RATE_ARTICLE_SUCCESS,
      },
    ];
    store.dispatch(actions.articleRating(dataValue))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });

  });

  it('Return failure if rate article was unsuccessful', (done) => {

    jest.spyOn(axios, 'post').mockRejectedValue({ response: { data: { message: '' } } });
    
  
    const expectedActions = [
      {
        type: types.RATE_ARTICLE_START,
      },
      {
        type: types.RATE_ARTICLE_FAILURE,
      },
    ];
    
    store.dispatch(actions.articleRating(3))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });

  });
});
