import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormContainer from './FormDisplay';
import { passwordResetEmail } from '../../actions/resetAction';

/**
 * @class ResetEmail
 * @extends {Component}
 */
export class ResetEmail extends Component {
    state = {
      userEmail: {},
    };

  onInputChange = (event) => {
    const { userEmail } = this.state;
    userEmail[event.target.id] = event.target.value;
    this.setState({ userEmail });
  };


  onButtonSubmit = (event) => {
    event.preventDefault();
    const { userEmail } = this.state;
    const { passwordResetEmail: emailReset } = this.props;
    emailReset(userEmail);
  }

  render() {
    const { reset: { isLoading } } = this.props;
    return (
      <FormContainer>
        <form className="col-md-5 col-sm-5 reset-form" onSubmit={this.onButtonSubmit}>
          <div className="form-group">
            <p>Email:</p>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              onChange={this.onInputChange}
              required
            />

          </div>

          <input
            type="submit"
            value={!isLoading ? 'send reset' : 'loading...'}
            id="submit"
            className="btn-block"
          />
        </form>
      </FormContainer>
    );
  }
}

ResetEmail.propTypes = {
  passwordResetEmail: PropTypes.func.isRequired,
  reset: PropTypes.shape({ isLoading: {} }).isRequired,
};


const mapStatetoProps = state => ({
  reset: state.reset,
});

export default connect(mapStatetoProps, { passwordResetEmail })(ResetEmail);
