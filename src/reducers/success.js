import { SUCCESS } from '../actions/types';

const initialState = {
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
