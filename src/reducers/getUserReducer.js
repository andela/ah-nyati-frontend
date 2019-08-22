import { GET_CURRENT_USER } from '../actions/types';

const initState = {};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}
