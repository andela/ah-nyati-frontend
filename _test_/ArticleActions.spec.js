import moxios from 'moxios';
import makeMockStore from './Utils/makeMockStore';
import { fetchResponseData, mockData } from './testData/articleData';
import ArticleActions from '../src/actions/ArticleActions';
import {
  SET_LOADING,
  FETCH_ARTICLES,
  SET_CURRENT_ARTICLES,
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
  describe('fetchArticles', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

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
