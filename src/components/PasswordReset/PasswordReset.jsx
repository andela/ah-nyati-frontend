import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import FormContainer from './FormDisplay';
import { resetNewPassword } from '../../actions/resetAction';

/**
 * @class PasswordReset
 * @extends {Component}
 */
export class PasswordReset extends Component {
  state = {
    password: {},
    confirmPassword: {},
  }

  onInputChange = (event) => {
    const { password } = this.state;
    password[event.target.id] = event.target.value;
    this.setState({ password });
  }

  onConfirmPasswordChange = (event) => {
    const { confirmPassword } = this.state;
    confirmPassword[event.target.id] = event.target.value;
    this.setState({ confirmPassword });
  }

  onButtonSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    const {
      location: {
        search,
      },
      resetNewPassword: resetpassword,
    } = this.props;
    const query = new URLSearchParams(search);
    const query2 = new URLSearchParams(search);
    const userToken = query.get('resetToken');
    const userEmail = query2.get('email');
    if (password.password !== confirmPassword.confirmPassword) {
      toast.error("Passwords don't match");
    } else {
      resetpassword(password, userToken, userEmail);
    }
  }

  render() {
    const { reset: { redirect, isLoading } } = this.props;
    return (
      <FormContainer>
        <form className="col-sm-5" onSubmit={this.onButtonSubmit}>
          <div className="userForm">

            <div className="form-group">
              <p>New Password:</p>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={this.onInputChange}
              />
            </div>

            <div className="form-group">
              <p>Confirm Password:</p>
              <input
                type="password"
                className="form-control"
                name="password"
                id="confirmPassword"
                onChange={this.onConfirmPasswordChange}
              />
            </div>


            <input
              type="submit"
              value={!isLoading ? 'Reset Password' : 'loading...'}
              id="submit"
              className="btn-block"
            />

          </div>

        </form>
        {redirect && <Redirect to="login" />}
      </FormContainer>
    );
  }
}

PasswordReset.defaultProps = {
  redirect: false,
};

PasswordReset.propTypes = {
  redirect: PropTypes.bool,
  resetNewPassword: PropTypes.func.isRequired,
  reset: PropTypes.shape({
    redirect: {}, isLoading: {},
  }).isRequired,
  location: PropTypes.shape({ search: {} }).isRequired,
};

const mapStatetoProps = state => ({
  reset: state.reset,
});

export default connect(mapStatetoProps, { resetNewPassword })(PasswordReset);