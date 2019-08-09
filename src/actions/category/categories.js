import * as types from './types';
import axiosWithAuth from '../../api/axios';


export const getCategoriesStart = () => ({
  type: types.GET_CATEGORY_START,
});

export const getCategoriesFailed = payload => ({
  type: types.GET_CATEGORY_FAILURE,
  payload,
});

export const getCategoriesSuccess = payload => ({
  type: types.GET_CATEGORY_SUCCESS,
  payload,
});

export const getCategories = () => (dispatch) => {
  dispatch(getCategoriesStart());
  return axiosWithAuth().get('/categories').then(({ data }) => {
    return dispatch(getCategoriesSuccess(data.data));
  }).catch((err) => {
    dispatch(getCategoriesFailed({ message: err.response.data.message }));
  });
};
