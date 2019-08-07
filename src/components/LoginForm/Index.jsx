import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/authActions';
import Socials from '../Socials';

/**
 *
 *
 * @class LoginForm
 * @extends {Component}
 */
export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const userData = {
      email,
      password,
    };
    this.props.loginUser(userData);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { email, password } = this.state;
    const { errors } = this.props;

    return (
      <div className="cont">
        <div className="form-div form-div2 row">
          <div className="col-lg-7 col-md-0 content">
            <h3 className="intro2">
            "Write. Rewrite. When not writing or rewriting, read. I know of no shortcuts"
            </h3>
            <h4 className="intro2">
            - Larry L. King, WD
            </h4>
            <div>
              <p className="msg">Login with</p>
            </div>
            <Socials />
          </div>
          <form className="col-lg-5 col-md-10 main-form login-form" onSubmit={this.onSubmit}>
            { errors.auth && <div className="err">Invalid email or password</div> }
            <div className="form-group">
              <p>Email:</p>
              <input
                type="email"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.email,
                })}
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={this.onChange}
              />
              {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <p>Password:</p>
              <input
                type="password"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password,
                })}
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
              {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <input type="submit" id="submit" className="btn-block" onClick={this.onSubmit} />
            <Link className="pswd" to="/resetPassword">Forgot password?</Link>
            <div className="lil-soc">
              <Socials />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
LoginForm.propTypes = {
  loginUser: PropTypes.func,
  auth: PropTypes.object,
  errors: PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.err,
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
