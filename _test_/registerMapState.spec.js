import { mapStateToProps } from '../src/components/RegisterForm';

const state = {
  auth: {},
  signupErrors: {},
};

describe('mapStateToProps', () => {
  it('return the right object', () => {
    expect(mapStateToProps(state)).toEqual(state);
  });
});
