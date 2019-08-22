import { toast } from 'react-toastify';
import axios from '../config/axiosInstance';
import {
  GET_AUTH_USER_PROFILE_START,
  GET_AUTH_USER_PROFILE_SUCCESS,
  GET_AUTH_USER_PROFILE_FAILURE,
  GET_AUTH_USER_FOLLOWERS_START,
  GET_AUTH_USER_FOLLOWERS_SUCCESS,
  GET_AUTH_USER_FOLLOWERS_FAILURE,
  GET_AUTH_USER_FOLLOWEE_START,
  GET_AUTH_USER_FOLLOWEE_SUCCESS,
  GET_AUTH_USER_FOLLOWEE_FAILURE,
  GET_AUTH_USER_PUBLISHED_ARTICLES_START,
  GET_AUTH_USER_PUBLISHED_ARTICLES_SUCCESS,
  GET_AUTH_USER_PUBLISHED_ARTICLES_FAILURE,
  GET_AUTH_USER_DRAFT_ARTICLES_START,
  GET_AUTH_USER_DRAFT_ARTICLES_SUCCESS,
  GET_AUTH_USER_DRAFT_ARTICLES_FAILURE,
  GET_AUTH_USER_ARTICLES_START,
  GET_AUTH_USER_ARTICLES_SUCCESS,
  GET_AUTH_USER_ARTICLES_FAILURE,
  EDIT_AUTH_USER_PROFILE_START,
  EDIT_AUTH_USER_PROFILE_SUCCESS,
  EDIT_AUTH_USER_PROFILE_FAILURE,
} from './types';

export const getAuthUserProfileStart = () => ({
  type: GET_AUTH_USER_PROFILE_START,
});

export const getAuthUserProfileSuccess = payload => ({
  type: GET_AUTH_USER_PROFILE_SUCCESS,
  payload,
});

export const getAuthUserProfileFailure = () => ({
  type: GET_AUTH_USER_PROFILE_FAILURE,
});

export const authUserProfile = userId => (dispatch) => {
  dispatch(getAuthUserProfileStart());
  return axios
    .get(`/user/profiles/${userId}`)
    .then((res) => {
      const { data } = res.data;
      dispatch(getAuthUserProfileSuccess(data[0]));
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(getAuthUserProfileFailure());
    });
};

export const getAuthUserFollowersStart = () => ({
  type: GET_AUTH_USER_FOLLOWERS_START,
});

export const getAuthUserFollowersSuccess = payload => ({
  type: GET_AUTH_USER_FOLLOWERS_SUCCESS,
  payload,
});
export const getAuthUserFollowersFailure = () => ({
  type: GET_AUTH_USER_FOLLOWERS_FAILURE,
});


export const getAuthUserFollowers = userId => (dispatch) => {
  dispatch(getAuthUserFollowersStart());
  return axios
    .get(`/user/followers/${userId}`)
    .then((res) => {
      const { data } = res.data;
      dispatch(getAuthUserFollowersSuccess(data[0].followers));
    })
    .catch((error) => {
      dispatch(getAuthUserFollowersFailure());
    });
};

export const getAuthUserFolloweeStart = () => ({
  type: GET_AUTH_USER_FOLLOWEE_START,
});

export const getAuthUserFolloweeSuccess = payload => ({
  type: GET_AUTH_USER_FOLLOWEE_SUCCESS,
  payload,
});

export const getAuthUserFolloweeFailure = () => ({
  type: GET_AUTH_USER_FOLLOWEE_FAILURE,
});

export const getAuthUserFollowee = userId => (dispatch) => {
  dispatch(getAuthUserFolloweeStart());
  return axios
    .get(`/user/followees/${userId}`)
    .then((res) => {
      const { data } = res.data;
     
      dispatch(getAuthUserFolloweeSuccess(data[0].followees));
    })
    .catch((error) => {
     
      dispatch(getAuthUserFolloweeFailure());
    });
};

export const getAuthUserPublishedArticlesStart = () => ({
  type: GET_AUTH_USER_PUBLISHED_ARTICLES_START,
});

export const getAuthUserPublishedArticlesSuccess = payload => ({
  type: GET_AUTH_USER_PUBLISHED_ARTICLES_SUCCESS,
  payload,
});

export const getAuthUserPublishedArticlesFailure = () => ({
  type: GET_AUTH_USER_PUBLISHED_ARTICLES_FAILURE,
});

export const getAuthUserPublishedArticles = (userId, offset) => (dispatch) => {
  dispatch(getAuthUserPublishedArticlesStart());
  return axios
    .get(`/articles/user/published/${userId}?limit=6&currentPage=${offset || 1}`)
    .then((res) => {
      const { data } = res.data;
      dispatch(getAuthUserPublishedArticlesSuccess(data[0]));
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(getAuthUserPublishedArticlesFailure());
    });
};
export const getAuthUserDraftArticlesStart = () => ({
  type: GET_AUTH_USER_DRAFT_ARTICLES_START,
});

export const getAuthUserDraftArticlesSuccess = payload => ({
  type: GET_AUTH_USER_DRAFT_ARTICLES_SUCCESS,
  payload,
});

export const getAuthUserDraftArticlesFailure = () => ({
  type: GET_AUTH_USER_DRAFT_ARTICLES_FAILURE,
});

export const getAuthUserDraftArticles = (userId, offset) => (dispatch) => {
  dispatch(getAuthUserDraftArticlesStart());
  return axios
    .get(`/articles/user/draft/${userId}?limit=6&currentPage=${offset || 1}`)
    .then((res) => {
      const { data } = res.data;
      dispatch(getAuthUserDraftArticlesSuccess(data[0]));
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(getAuthUserDraftArticlesFailure());
    });
};

export const getAuthUserArticlesStart = () => ({
  type: GET_AUTH_USER_ARTICLES_START,
});

export const getAuthUserArticlesSuccess = payload => ({
  type: GET_AUTH_USER_ARTICLES_SUCCESS,
  payload,
});

export const getAuthUserArticlesFailure = () => ({
  type: GET_AUTH_USER_ARTICLES_FAILURE,
});

export const getAuthUserArticles = userName => (dispatch) => {
  dispatch(getAuthUserArticlesStart());
  return axios
    .get(`/searcharticles?author=${userName}`)
    .then((res) => {
      const { data } = res.data;
      dispatch(getAuthUserArticlesSuccess(data[0]));
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(getAuthUserArticlesFailure());
    });
};

export const editAuthUserProfileStart = () => ({
  type: EDIT_AUTH_USER_PROFILE_START,
});

export const editAuthUserProfileSuccess = payload => ({
  type: EDIT_AUTH_USER_PROFILE_SUCCESS,
  payload,
});

export const editAuthUserProfileFailure = () => ({
  type: EDIT_AUTH_USER_PROFILE_FAILURE,
});

export const editAuthUserProfile = (newUserProfile, userId) => (dispatch) => {
  dispatch(editAuthUserProfileStart());
  return axios
    .put(`/user/profiles/${userId}`, newUserProfile)
    .then((res) => {
      const { data, message } = res.data;
      dispatch(editAuthUserProfileSuccess(data[0]));
      toast.success(message);
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(editAuthUserProfileFailure());
      toast.error(message);
    });
};
