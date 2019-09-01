import moxios from 'moxios';
import axios from '../src/config/axiosInstance';
import makeMockStore from './Utils/makeMockStore';
import ArticleActions from '../src/actions/ArticleActions';
import {
  DELETE_ARTICLE_SUCCESS, GET_ERRORS,
} from '../src/actions/types';

const { deleteArticle } = ArticleActions;
const deleteReponse = {
  status: 200,
  message: 'Article successfully deleted',
};
const baseUrl = 'https://ah-nyati-backend-staging.herokuapp.com/api/v1/articles/';

const store = makeMockStore({
  article: {
    allArticles: [],
    loading: false,
    response: null,
  },
  errors: {},
});


describe('Article Actions', () => {
  describe('deleteArticle', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it('deletes an articles', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({ status: 200, response: deleteReponse });
      });

      const expectedActions = [
        { type: DELETE_ARTICLE_SUCCESS, payload: deleteReponse.message },
      ];

      return store.dispatch(deleteArticle())
        .then(() => {
          const actionsCalled = store.getActions();
          expect(actionsCalled).toEqual(expectedActions);
          expect(actionsCalled[0].type).toEqual(DELETE_ARTICLE_SUCCESS);
        });
    });
  });

  describe('deleteArticle error', () => {
    beforeEach(() => {
      moxios.install(axios);
    });
    afterEach(() => {
      moxios.uninstall(axios);
    });

    it('deletes an articles', () => {
      moxios.stubRequest(`${baseUrl}article`,
        {
          status: 200, response: deleteReponse,
        });

      const expectedActions = [
        { type: DELETE_ARTICLE_SUCCESS, payload: deleteReponse.message },
        { type: GET_ERRORS, payload: 'Request failed with status code 401' },
      ];

      return store.dispatch(deleteArticle())
        .then(() => {
          const actionsCalled = store.getActions();
          expect(actionsCalled[0].type).toEqual(expectedActions[0].type);
          expect(actionsCalled[1].type).toEqual(expectedActions[1].type);
        });
    });
  });
});
