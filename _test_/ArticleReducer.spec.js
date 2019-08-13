import articleReducer from '../src/reducers/articleReducer';
import {
  FETCH_ARTICLES,
  SET_CURRENT_ARTICLES,
  SET_LOADING,
} from '../src/actions/types';
import { homeData } from './testData/homeData';

describe('Article reducer', () => {
  it('should fetch articles', () => {
    expect(
      articleReducer({
        allArticles: [],
        loading: false,
        totalArticles: 0,
      }, {
        type: FETCH_ARTICLES,
        payload: {
          articles: homeData,
          totalArticles: 5,
        },
      }),
    ).toEqual(
      {
        allArticles: homeData,
        loading: false,
        totalArticles: undefined,
      },
    );
  });

  it('should set current articles', () => {
    expect(
      articleReducer({
        currentArticles: [],
        loading: false,
      }, {
        type: SET_CURRENT_ARTICLES,
        payload: homeData,
      }),
    ).toEqual(
      {
        currentArticles: homeData,
        loading: false,
      },
    );
  });

  it('should set loading to true', () => {
    expect(
      articleReducer({
        loading: false,
      }, {
        type: SET_LOADING,
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should return state for default call', () => {
    expect(
      articleReducer({
        loading: false,
      }, {
        type: '',
      }),
    ).toEqual(
      {
        loading: false,
      },
    );
  });
});
