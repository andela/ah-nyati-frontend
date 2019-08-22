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
} from '../actions/types';


const initialState = {
  isLoading: false,
  profile: {},
  followers: [],
  followees: [],
  published: [],
  draft: [],
  articles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_USER_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_AUTH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: action.payload,
      };
    case GET_AUTH_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_AUTH_USER_FOLLOWERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_AUTH_USER_FOLLOWERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        followers: action.payload,
      };
    case GET_AUTH_USER_FOLLOWERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_AUTH_USER_FOLLOWEE_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_AUTH_USER_FOLLOWEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        followees: action.payload,
      };
    case GET_AUTH_USER_FOLLOWEE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_AUTH_USER_PUBLISHED_ARTICLES_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_AUTH_USER_PUBLISHED_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        published: action.payload,
      };
    case GET_AUTH_USER_PUBLISHED_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_AUTH_USER_DRAFT_ARTICLES_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_AUTH_USER_DRAFT_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        draft: action.payload,
      };
    case GET_AUTH_USER_DRAFT_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_AUTH_USER_ARTICLES_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_AUTH_USER_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: action.payload,
      };
    case GET_AUTH_USER_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case EDIT_AUTH_USER_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_AUTH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: action.payload,
      };
    case EDIT_AUTH_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
