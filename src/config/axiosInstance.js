import axios from 'axios';

const token = localStorage.getItem('jwtToken');

const instance = axios.create({
  baseURL: 'https://ah-nyati-backend-staging.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    token,
  },
});

export default instance;
