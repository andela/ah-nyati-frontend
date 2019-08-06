import { FETCH_ALL_ARTICLE } from '../../actions/types';

const initState = {};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_ALL_ARTICLE:
      return action.payload;
    default:
      return state;
  }
}
