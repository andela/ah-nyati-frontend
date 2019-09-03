import reducer from '../src/reducers/articleReducer';
import {
  FETCH_ARTICLES,
  SET_LOADING,
  SET_CURRENT_ARTICLES,
  GET_ARTICLES_BY_TAG,
} from '../src/actions/types';

describe('fetch all article reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        totalArticles: 0,
        currentArticles: [],
        articlesByTag: [],
        allArticles: [],
        loading: false,
      },
    );
  });
  it('should fetch all articles loading state', () => {
    expect(reducer(undefined, { type: FETCH_ARTICLES, payload: { articles: [], totalCount: 0 } })).toEqual(
      {
        totalArticles: 0,
        currentArticles: [],
        articlesByTag: [],
        allArticles: [],
        loading: false,
      },
    );
  });
  it('should fetch all articles by tag', () => {
    expect(reducer(undefined, { type: GET_ARTICLES_BY_TAG, payload: { articles: [], totalCount: 0 } })).toEqual(
      {
        totalArticles: 0,
        currentArticles: [],
        articlesByTag: { articles: [], totalCount: 0 },
        allArticles: [],
        loading: false,
      },
    );
  });
  it('should set article  loading state', () => {
    expect(reducer(undefined, { type: SET_LOADING, payload: { totalArticles: 0 } })).toEqual(
      {
        totalArticles: 0,
        loading: true,
        articlesByTag: [],
        currentArticles: [],
        allArticles: [],
      },
    );
  });
  it('should set current article loading state', () => {
    expect(reducer(undefined, { type: SET_CURRENT_ARTICLES, payload: [] })).toEqual(
      {
        totalArticles: 0,
        currentArticles: [],
        articlesByTag: [],
        loading: false,
        allArticles: [],
      },
    );
  });
});
