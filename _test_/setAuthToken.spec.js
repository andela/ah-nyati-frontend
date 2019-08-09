import axios from 'axios';
import setAuthToken from '../src/utils/setAuthToken';

describe('setAuthToken function', () => {
  it('should append the token from axios headers', () => {
    setAuthToken('hghhhdcdcudcudbcjbcj');
    expect(axios.defaults.headers.common.Authorization).toBe('hghhhdcdcudcudbcjbcj');
  });
  it('should delete the token from axios headers', () => {
    setAuthToken();
    expect(axios.defaults.headers.common.Authorization).toBe(undefined);
  });
});
