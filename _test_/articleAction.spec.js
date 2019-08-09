
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import { createArticle } from '../src/actions/article/articles';
import { CREATE_ARTICLE_START, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE } from '../src/actions/article/types';

const mock = new MockAdapter(axios);
const mockStore = configureStore([thunk]);

const baseUrl = 'https://ah-nyati-backend-staging.herokuapp.com/api/v1';

describe('article actions', () => {
  it('has an action to show create article request succeeded', (done) => {
    const store = mockStore({ });
    const articleData = {
      data: {
        id: 1,
        title: 'The new article',
      },
    };
    mock.onPost(`${baseUrl}/articles`).reply(
      201,
      {
        data: articleData,
      },
    );
    const expectedAction = [
      {
        type: CREATE_ARTICLE_START,
      },
      {
        type: CREATE_ARTICLE_SUCCESS,
        payload: articleData,
      },
    ];
    store.dispatch(createArticle({ title: 'The new article' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('has an action to show create article request failure', (done) => {
    const store = mockStore({ });
    const message = 'Description is required';

    mock.onPost(`${baseUrl}/articles`).reply(
      400,
      {
        message,
      },
    );
    const expectedAction = [
      {
        type: CREATE_ARTICLE_START,
      },
      {
        type: CREATE_ARTICLE_FAILURE,
        payload: {
          message,
        },
      },
    ];
    store.dispatch(createArticle({ title: 'The new article' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
