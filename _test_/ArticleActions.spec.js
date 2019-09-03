import moxios from 'moxios';
import makeMockStore from './Utils/makeMockStore';
import { fetchResponseData, mockData, getArticlesByTagData } from './testData/articleData';
import ArticleActions from '../src/actions/ArticleActions';
import {
  SET_LOADING,
  FETCH_ARTICLES,
  SET_CURRENT_ARTICLES,
  GET_ARTICLES_BY_TAG,
} from '../src/actions/types';

const { fetchArticles, getArticlesByTag } = ArticleActions;

const store = makeMockStore({
  article: {
    totalArticles: 0,
    currentArticles: [],
    articlesByTag: [],
    allArticles: [],
    loading: false,
  },
  errors: {},
});

describe('Article Actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe('fetchArticles', () => {
    it('fetches articles', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({ status: 200, response: fetchResponseData });
      });

      const expectedActions = [
        { type: SET_LOADING },
        { type: FETCH_ARTICLES, payload: mockData },
        { type: SET_CURRENT_ARTICLES, payload: mockData.articles },
      ];

      return store.dispatch(fetchArticles())
        .then(() => {
          const actionsCalled = store.getActions();
          expect(actionsCalled).toEqual(expectedActions);
          expect(actionsCalled[1].type).toEqual(FETCH_ARTICLES);
        });
    });
  });
});
