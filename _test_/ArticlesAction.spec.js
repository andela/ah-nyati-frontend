import '@babel/polyfill';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import mockArticle from '../src/utils/mockStore';
import getAllArticles from '../src/actions/articlesAction';
import axios from '../src/config/axiosInstance';
import { FETCH_ALL_ARTICLE } from '../src/actions/types';

const mockStore = configureMockStore([thunk]);
let store = mockStore();
const { mockArticleResponse } = mockArticle;

describe('Get All Articles', () => {
  beforeEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));
  it('Returns articles', async () => {
    await moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/articles', {
      status: 200,
      response: mockArticleResponse,
    });

    store = mockStore({});
    await store.dispatch(getAllArticles());
    expect(store.getActions()).toEqual([]);
  });
});
