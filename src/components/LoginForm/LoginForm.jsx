import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';
import './LoginForm.scss';
/**
 *
 *
 * @class LoginForm
 * @extends {Component}
 */
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const userData = {

      email,
      password,
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, email, password } = this.state;
    return (
      <div className="cont">
        <div className="form-div row">
          <div className="col-sm-7">
            <h1 className="intro">"Write. Rewrite. When not writting or rewritting, read. I know of no shortcuts"</h1>
            <p className="msg">Login with</p>
            <div className="row social-login">
              <div className="col-sm-3">
                <a href="hello.com">
                  <i className="fab fa-google-plus social" />
                </a>
              </div>

              <div className="col-sm-3">
                <a href="hello.com">
                  <i className="fab fa-facebook social" />
                </a>
              </div>

              <div className="col-sm-3">
                <a href="hello.com">
                  <i className="fab fa-twitter social" />
                </a>
              </div>

              <div className="col-sm-3">
                <a href="hello.com">
                  <i className="fab fa-github social" />
                </a>
              </div>
            </div>
          </div>
          <form className="col-sm-5" onSubmit={this.onSubmit}>
            <div className="form-group">
              <p>Name:</p>
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
              <p>Email:</p>
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
            <input type="submit" id="submit" className="btn-block" />
          </form>
        </div>
      </div>
    );
  }
}
LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
