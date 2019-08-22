import reducer from '../src/reducers/articlesReducer';
import { FETCH_ALL_ARTICLE } from '../src/actions/types';

describe('Login reducer', () => {
  const initState = {
    isLoading: true,
    articles: '',
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should successfully store articles on store', () => {
    expect(reducer(initState, {
      type: FETCH_ALL_ARTICLE,
      payload: 'articles',
    })).toEqual({
      ...initState,
      isLoading: false,
      articles: 'articles',
    });
  });
});
