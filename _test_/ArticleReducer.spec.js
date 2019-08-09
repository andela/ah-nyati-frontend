import articleReducer from '../src/reducers/articleReducer';
import {
  FETCH_ARTICLES,
} from '../src/actions/types';
import { homeData } from './testData/homeData';

describe('todos reducer', () => {
  it('should handle ADD_TODO', () => {
    expect(
      articleReducer([], {
        type: FETCH_ARTICLES,
        payload: homeData,
      }),
    ).toEqual(
      {
        allArticles: homeData,
        loading: false,
      },
    );
  });
});
