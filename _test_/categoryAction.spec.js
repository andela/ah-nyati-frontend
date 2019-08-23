
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import { getCategories } from '../src/actions/category/categories';
import { GET_CATEGORY_START, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE } from '../src/actions/category/types';

const mock = new MockAdapter(axios);
const mockStore = configureStore([thunk]);

const baseUrl = 'https://ah-nyati-backend-staging.herokuapp.com/api/v1';

describe('category actions', () => {
  it('has an action to show get category request succeeded', (done) => {
    const store = mockStore({ });
    const categoryData = {
      data: {
        id: 1,
        name: 'Technology',
      },
    };
    mock.onGet(`${baseUrl}/categories`).reply(
      200,
      {
        data: categoryData,
      },
    );
    const expectedAction = [
      {
        type: GET_CATEGORY_START,
      },
      {
        type: GET_CATEGORY_SUCCESS,
        payload: categoryData,
      },
    ];
    store.dispatch(getCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('has an action to show get category request failure', (done) => {
    const store = mockStore({ });
    const message = 'category fetch failed';

    mock.onGet(`${baseUrl}/categories`).reply(
      400,
      {
        message,
      },
    );
    const expectedAction = [
      {
        type: GET_CATEGORY_START,
      },
      {
        type: GET_CATEGORY_FAILURE,
        payload: {
          message,
        },
      },
    ];
    store.dispatch(getCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
