import moxios from 'moxios';
import makeMockStore from './Utils/makeMockStore';
import { fetchResponseData } from './testData/articleData';

import ArticleActions from '../src/actions/ArticleActions';
import {
  SET_LOADING,
  FETCH_ARTICLES,
} from '../src/actions/types';

const { fetchArticles } = ArticleActions;

const store = makeMockStore({
  article: {
    allArticles: [],
    loading: false,
  },
  errors: {},
});

describe('Article Actions', () => {
  afterEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({ status: 200, data: fetchResponseData });
  });

  it('fetches articles', () => {
    const expectedActions = [
      { type: SET_LOADING },
      { type: FETCH_ARTICLES, payload: fetchResponseData[0].articles },
    ];

    store.dispatch(fetchArticles())
      .then(() => {
        const actionsCalled = store.getActions();
        expect(actionsCalled).toEqual(expectedActions);
        expect(actionsCalled[1].type).toEqual(FETCH_ARTICLES);
      });
  });
});
