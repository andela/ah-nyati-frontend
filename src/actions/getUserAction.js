import axios from '../config/axiosInstance';
import { GET_CURRENT_USER } from './types';

const getUser = userName => (dispatch) => {
  axios.get(`/user/profiles/${userName}`)
    .then(res => dispatch({
      type: GET_CURRENT_USER,
      payload: res.data.data[0],
    }))
    .catch(err => console.log(err));
};

export default getUser;
