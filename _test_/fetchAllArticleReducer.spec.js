import reducer from '../src/reducers/articleReducer';
import {
  FETCH_ARTICLES,
  SET_LOADING,
  SET_CURRENT_ARTICLES,
  DELETE_ARTICLE_SUCCESS,
} from '../src/actions/types';

describe('fetch all article reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        totalArticles: 0,
        currentArticles: [],
        allArticles: [],
        loading: false,
        response: null,
      },
    );
  });
  it('should fetch all articles loading state', () => {
    expect(reducer(undefined, {
      type: FETCH_ARTICLES,
      payload: {
        articles: [],
        totalCount: 0,
      },
    }))
      .toEqual(
        {
          totalArticles: 0,
          currentArticles: [],
          allArticles: [],
          loading: false,
          response: null,
        },
      );
  });
  it('should set article  loading state', () => {
    expect(reducer(undefined, { type: SET_LOADING, payload: { totalArticles: 0 } })).toEqual(
      {
        totalArticles: 0,
        loading: true,
        currentArticles: [],
        allArticles: [],
        response: null,
      },
    );
  });
  it('should delete an article', () => {
    expect(reducer(undefined, {
      type: DELETE_ARTICLE_SUCCESS,
      payload: 'Article successfully deleted',
    }))
      .toEqual(
        {
          totalArticles: 0,
          currentArticles: [],
          allArticles: [],
          loading: false,
          response: 'Article successfully deleted',
        },
      );
  });
  it('should set current article loading state', () => {
    expect(reducer(undefined, { type: SET_CURRENT_ARTICLES, payload: [] })).toEqual(
      {
        totalArticles: 0,
        currentArticles: [],
        loading: false,
        allArticles: [],
        response: null,
      },
    );
  });
});
