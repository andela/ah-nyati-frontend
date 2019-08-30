import {
  GET_PROFILE, PROFILE_LOADING, FETCH_PROFILE_ARTICLE,
} from '../actions/types';

const initialState = {
  profiles: null,
  profileArticles: null,
  loading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    case FETCH_PROFILE_ARTICLE:
      return {
        ...state,
        profileArticles: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default profileReducer;
