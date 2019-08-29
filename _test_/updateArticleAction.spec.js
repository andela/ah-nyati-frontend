
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import { updateArticle } from '../src/actions/article/update';
import { UPDATE_ARTICLE_START, UPDATE_ARTICLE_SUCCESS, UPDATE_ARTICLE_FAILURE } from '../src/actions/article/types';

const mock = new MockAdapter(axios);
const mockStore = configureStore([thunk]);

const baseUrl = 'https://ah-nyati-backend-staging.herokuapp.com/api/v1';
const article = 'article';

describe('update article actions', () => {
  it('has an action to show update article request succeeded', (done) => {
    const store = mockStore({ });
    const articleData = {
      data: {
        id: 1,
        title: 'The new article',
      },
    };
    mock.onPatch(`${baseUrl}/articles/article`).reply(
      200,
      {
        data: articleData,
      },
    );
    const expectedAction = [
      {
        type: UPDATE_ARTICLE_START,
      },
      {
        type: UPDATE_ARTICLE_SUCCESS,
        payload: articleData,
      },
    ];
    store.dispatch(updateArticle(article, { title: 'The new article' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('has an action to show update article request failure', (done) => {
    const store = mockStore({ });
    const message = 'Description is required';

    mock.onPatch(`${baseUrl}/articles/article`).reply(
      400,
      {
        message,
      },
    );
    const expectedAction = [
      {
        type: UPDATE_ARTICLE_START,
      },
      {
        type: UPDATE_ARTICLE_FAILURE,
        payload: {
          message,
        },
      },
    ];
    store.dispatch(updateArticle(article, { title: 'The new article' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
