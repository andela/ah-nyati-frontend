import axios from '../config/axiosInstance';
import { GET_PROFILE, PROFILE_LOADING, FETCH_PROFILE_ARTICLE } from './types';


// PROFILE LOADING
export const setProfileLoading = () => ({
  type: PROFILE_LOADING,
});

// GET CURRENT PROFILE
export const userProfiles = userId => (dispatch) => {
  dispatch(setProfileLoading());
  return axios.get(`/user/profiles/${userId}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data.data[0],
    }))
    .catch(errors => dispatch({
      type: GET_PROFILE,
      payload: null,
    }));
};
export const userArticles = (userId, page = 1) => (dispatch) => {
  return axios.get(`/articles/user/${userId}?limit=6&currentPage=${page}`)
    .then(res => dispatch({
      type: FETCH_PROFILE_ARTICLE,
      payload: res.data.data[0],
    }))
    .catch(errors => dispatch({
      type: FETCH_PROFILE_ARTICLE,
      payload: null,
    }));
};
