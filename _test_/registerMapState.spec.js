import { mapStateToProps } from '../src/components/RegisterForm';

const state = {
  auth: {},
  signupErrors: {},
  loadingErrors: false,
  loading: false,
  success: true,
};

describe('mapStateToProps', () => {
  it('return the right object', () => {
    expect(mapStateToProps(state)).toBeDefined();
  });
});
