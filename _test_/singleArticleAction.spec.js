import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { VIEW_SINGLE_ARTICLE, SET_LOADING } from '../src/actions/types';
import { successResponse, errorResponse } from '../src/utils/singleArticleMockStore';
import articleActions from '../src/actions/ArticleActions';
import axios from '../src/config/axiosInstance';

const { viewArticle } = articleActions;

const mockStore = configureMockStore([thunk]);
let store = mockStore();

describe('Register actions', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));

  it('Returns success if article fetch was successful', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: successResponse });
    });
    const expectedActions = [
      {
        type: SET_LOADING,
      },
      {
        payload: successResponse.data.body,
        type: VIEW_SINGLE_ARTICLE,
      },
    ];

    store = mockStore({});
    const history = { push: jest.fn() };

    return store.dispatch(viewArticle('article-3', history))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[1].type).toEqual(expectedActions[1].type);
        done();
      });
  });

  it('Returns error if article fetch was successful', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 404, response: errorResponse });
    });
    const expectedActions = [
      {
        type: SET_LOADING,
      },
      {
        payload: errorResponse.message,
        type: VIEW_SINGLE_ARTICLE,
      },
    ];

    store = mockStore({});
    const history = { push: jest.fn() };

    return store.dispatch(viewArticle('article-50-487263', history))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        // expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
