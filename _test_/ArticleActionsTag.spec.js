import moxios from 'moxios';
import makeMockStore from './Utils/makeMockStore';
import { getArticlesByTagData } from './testData/articleData';
import ArticleActions from '../src/actions/ArticleActions';
import {
  SET_LOADING,
  GET_ARTICLES_BY_TAG,
  GET_ERRORS,
} from '../src/actions/types';

const { getArticlesByTag } = ArticleActions;

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
  describe('getArticlesByTag', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it('fetches articles with a specific tag', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({ status: 200, response: getArticlesByTagData });
      });

      const expectedActions = [
        { type: SET_LOADING },
        { type: GET_ARTICLES_BY_TAG, payload: getArticlesByTagData.data[0] },
      ];

      return store.dispatch(getArticlesByTag('lagos', 1))
        .then(() => {
          const actionsCalled = store.getActions();
          expect(actionsCalled).toEqual(expectedActions);
        });
    });
  });


  describe('getArticlesByTag error', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it('throws an error', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        const errorResponse = {
          status: 400,
          message: 'Your search input must be greater than 3 letters',
        };
        request.respondWith({ status: 200, response: errorResponse });
      });

      const expectedActions = [
        { type: SET_LOADING },
        { type: GET_ARTICLES_BY_TAG, payload: getArticlesByTagData.data[0] },
        { type: SET_LOADING },
        { type: GET_ERRORS, payload: 'Cannot read property \'0\' of undefined' },
      ];

      return store.dispatch(getArticlesByTag('trjkfjjdhh', 9))
        .then(() => {
          const actionsCalled = store.getActions();
          expect(actionsCalled).toEqual(expectedActions);
        });
    });
  });
});
