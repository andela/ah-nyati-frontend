import React, { Component } from 'react';
import './RegisterForm.scss';
import axios from '../../config/axiosInstance';
import { connect } from 'react-redux'

class form extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    errors: {},
  }

  changeValueHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUserDetails = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post('/auth/signup', newUserDetails)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data.message }));
  }

  render() {
    const { errors } = this.state;
    console.log(errors);

    return (
      <div className="cont">
        <div className="form-div row">
          <div className="col-sm-7">
            <h1 className="intro">Want to become a contributor?</h1>
            <p className="msg">Sign up with</p>
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
              <p>Username:</p>
              <input
                type="text"
                className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                name="userName"
                value={this.state.userName}
                onChange={this.changeValueHandler}
              />
              {errors.userName && (<div className="invalid-feedback">{errors.userName}</div>)}
            </div>

            <div className="form-group">
              <p>Email:</p>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                name="email"
                value={this.state.email}
                onChange={this.changeValueHandler}
              />
              {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
            </div>

            <div className="form-group">
              <p>Password:</p>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                name="password"
                value={this.state.password}
                onChange={this.changeValueHandler}
              />
              {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
            </div>
            <input type="submit" value="Register" id="submit" className="btn-block" />
          </form>
        </div>
      </div>
    );
  }
}

export default form;
