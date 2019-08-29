import React, { Component, createRef } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/registerActions';
import InputField from '../InputField';
import Socials from '../Socials';
import Loader from '../Loader';

export class RegisterForm extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
  }

  formRef = createRef()

  changeValueHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const newUserDetails = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.registerUser(newUserDetails, this.props.history);
  }

  render() {
    const { signupErrors } = this.props;

    const labels = {
      userName: 'Username:',
      email: 'Email:',
      password: 'Password:',
    };

    const formTypes = {
      text: 'text',
      email: 'email',
      password: 'password',
    };

    if (this.props.loadingErrors && this.props.loading) {
      return <Loader />;
    }

    return (
      <div className="cont">
        <div className="form-div row">
          <div className="col-lg-7 col-md-0 content">
            <h1 className="intro">Want to become a contributor?</h1>
            <div>
              <p className="msg">Sign up with</p>
            </div>
            <Socials action="Signup" />
          </div>

          <form className="col-lg-5 col-md-10 main-form reg-form" onSubmit={this.onSubmit} noValidate>
            <h4 className="lil-signup">Sign Up</h4>
            <div className="form-group">
              <InputField
                classes={`form-control ${signupErrors.userName && 'is-invalid'}`}
                type={formTypes.text}
                label={labels.userName}
                value={this.state.userName}
                change={this.changeValueHandler}
                name="userName"
                error={signupErrors.userName}
              />
            </div>

            <div className="form-group">
              <InputField
                classes={`form-control ${signupErrors.email && 'is-invalid'}`}
                type={formTypes.email}
                label={labels.email}
                value={this.state.email}
                change={this.changeValueHandler}
                name="email"
                error={signupErrors.email}
              />
            </div>

            <div className="form-group">
              <InputField
                classes={`form-control ${signupErrors.password && 'is-invalid'}`}
                type={formTypes.password}
                label={labels.password}
                value={this.state.password}
                change={this.changeValueHandler}
                name="password"
                error={signupErrors.password}
              />
            </div>
            <input type="submit" value="Register" id="submit" className="btn-block" />
            <div className="lil-soc">
              <Socials action="Signup" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    userName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  signupErrors: PropTypes.shape({
    userName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  loadingErrors: PropTypes.bool.isRequired,
};


export const mapStateToProps = state => ({
  auth: state.auth,
  signupErrors: state.signupErrors.errors,
  loadingErrors: state.signupErrors.loading,
  loading: state.success.loading,
});

export default connect(mapStateToProps, { registerUser })(withRouter(RegisterForm));
