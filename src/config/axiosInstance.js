import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ah-nyati-backend-staging.herokuapp.com/api/v1',
});

export default instance;
