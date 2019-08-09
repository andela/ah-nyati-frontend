import reducer from '../src/reducers/category/category';
import {
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from '../src/actions/category/types';

describe('category reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        categories: [],
        isLoading: false,
        errors: null,
      },
    );
  });
  it('should return the get category loading state', () => {
    expect(reducer(undefined, { type: GET_CATEGORY_START })).toEqual(
      {
        categories: [],
        isLoading: true,
        errors: null,
      },
    );
  });
  it('should return the get category on success loading state', () => {
    expect(reducer(undefined, { type: GET_CATEGORY_SUCCESS, payload: { id: 1 } })).toEqual(
      {
        categories: [
          {
            id: 1,
          },
        ],
        isLoading: false,
        errors: null,
      },
    );
  });
  it('should return the get category on failure loading state', () => {
    expect(reducer(undefined, { type: GET_CATEGORY_FAILURE, payload: { message: 'Error fetching categries' } })).toEqual(
      {
        categories: [],
        isLoading: false,
        errors: {
          message: 'Error fetching categries',
        },
      },
    );
  });
});
