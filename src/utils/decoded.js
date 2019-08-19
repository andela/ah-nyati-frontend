import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('jwtToken');
const defaultStatus = { isVerified: false };

const decodeToken = () => {
  if (!token) return defaultStatus;
  const decoded = jwtDecode(token);
  return decoded;
};

export default decodeToken;
