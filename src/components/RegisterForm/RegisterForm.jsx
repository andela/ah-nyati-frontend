import React, { Component, createRef } from 'react';
import './RegisterForm.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/authActions';
import InputField from '../InputField/InputField';

class Form extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    errors: {},
    mobile: false,
  }

  formRef = createRef()

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleResize = () => {
    const width = window.clientWidth;
    const { mobile } = this.state;
    if (width <= 1024 && !mobile) {
      this.setState({ mobile: true });
    } else if (width > 1024 && mobile) {
      this.setState({ mobile: false });
    }
  }

  changeValueHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.formRef.current.className);
    const newUserDetails = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.registerUser(newUserDetails, this.props.history);
  }

  render() {
    const { errors } = this.state;

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

    return (
      <div className="cont">
        <div className="form-div row">
          <div className="col-sm-7 content">
            <h1 className="intro">Want to become a contributor?</h1>
            {/* <p className="msg">Sign up with</p> */}
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

          <form className="col-sm-5 main-form" onSubmit={this.onSubmit} ref={this.formRef} noValidate>
            <div className="form-group">
              <InputField
                classes={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                type={formTypes.text}
                label={labels.userName}
                value={this.state.userName}
                change={this.changeValueHandler}
                name="userName"
                error={this.state.errors.userName}
              />
            </div>

            <div className="form-group">
              <InputField
                classes={`form-control ${errors.email ? 'is-invalid' : ''}`}
                type={formTypes.email}
                label={labels.email}
                value={this.state.email}
                change={this.changeValueHandler}
                name="email"
                error={this.state.errors.email}
              />
            </div>

            <div className="form-group">
              <InputField
                classes={`form-control ${errors.password ? 'is-invalid' : ''}`}
                type={formTypes.password}
                label={labels.password}
                value={this.state.password}
                change={this.changeValueHandler}
                name="password"
                error={this.state.errors.password}
              />
            </div>
            <input type="submit" value="Register" id="submit" className="btn-block" />
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    userName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Form));
