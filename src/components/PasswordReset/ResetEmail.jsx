import React, { Component } from 'react';
import './PasswordReset.scss';
import { connect } from 'react-redux';
import FormContainer from './FormDisplay';
import { passwordReset } from '../../actions/auth.action';

class ResetEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: {},
    };
  }

  onInputChange = (event) => {
    const { userEmail } = this.state;
    userEmail[event.target.id] = event.target.value;
    this.setState({ userEmail });
  };

  onButtonSubmit = (event) => {
    event.preventDefault();
    const { userEmail } = this.state;
    const { passwordReset } = this.props;
    passwordReset(userEmail);
  };

  render() {
    const { userEmail } = this.state;
    const { auth } = this.props;
    const { redirect } = auth;
    return (
      <FormContainer>
        <form className="col-sm-5" onSubmit={this.onButtonSubmit}>
          <div className="form-group">
            <p>Email:</p>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              value={userEmail.email}
              onChange={this.onInputChange}
            />

          </div>

          <input
            type="submit"
            value="Send Reset"
            id="submit"
            className="btn-block"
          />
        </form>
      </FormContainer>
    );
  }
}
const mapStatetoProps = state => ({
  auth: state.auth,
});

export default connect(mapStatetoProps, { passwordReset })(ResetEmail);
