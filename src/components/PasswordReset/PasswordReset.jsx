import React, { Component } from 'react';
import './PasswordReset.scss';
import { connect } from 'react-redux';
import FormContainer from './FormDisplay';
import { newPassword } from '../../actions/auth.action';

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPasswordDetails: {},
    };
  }

  onInputChange = (event) => {
    const { newPasswordDetails } = this.state;
    newPasswordDetails[event.target.id] = event.target.value;
    this.setState({ newPasswordDetails });
  };
  
  onButtonSubmit = (event) => {
    event.preventDefault();
    const { newPasswordDetails } = this.state;
    const { newPassword } = this.props;
    newPassword(newPasswordDetails);
  }

  render() {
    const { newPasswordDetails } = this.state;
    const { auth } = this.props;
    const { redirect } = auth;
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
                value={newPasswordDetails.password}
                onChange={this.onInputChange}
              />
            </div>

            <div className="form-group">
              <p>Confrim Password:</p>
              <input
                type="password"
                className="form-control"
                name="password"
                value={newPasswordDetails.password}
                onChange={this.onInputChange}
              />
            </div>
            
            
            <input 
            type="submit" 
            value="Reset Password" 
            id="submit" 
            className="btn-block"
             />

          </div>
  
        </form>
      </FormContainer>
    );
  }
}
const mapStatetoProps = state => ({
  auth: state.auth,
});

export default connect(mapStatetoProps, { newPassword })(PasswordReset);

