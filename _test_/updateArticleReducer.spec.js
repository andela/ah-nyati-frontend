import reducer from '../src/reducers/article/update';
import {
  UPDATE_ARTICLE_START,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
} from '../src/actions/article/types';

describe('article reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        articles: [],
        isLoading: false,
        errors: null,
      },
    );
  });
  it('should return the initial state on start', () => {
    expect(reducer(undefined, { type: UPDATE_ARTICLE_START })).toEqual(
      {
        articles: [],
        isLoading: true,
        errors: null,
      },
    );
  });
  it('should return the state on success', () => {
    expect(reducer(undefined, { type: UPDATE_ARTICLE_SUCCESS, payload: { id: 1 } })).toEqual(
      {
        articles: [
          {
            id: 1,
          },
        ],
        isLoading: false,
        errors: null,
      },
    );
  });
  it('should return the state on failure', () => {
    expect(reducer(undefined, { type: UPDATE_ARTICLE_FAILURE, payload: { message: 'Error occured' } })).toEqual(
      {
        articles: [],
        isLoading: false,
        errors: {
          message: 'Error occured',
        },
      },
    );
  });
});
