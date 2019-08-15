import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'querystring';
import { history as historyPropTypes, location as locationPropTypes } from 'history-prop-types';
import { socialLogin } from '../actions/authActions';
import Loader from '../components/Loader';
import Helpers from '../helpers/helpers';

const { redirectToDashboard } = Helpers;

export class SocialAuth extends Component {
  componentDidMount() {
    const { location, socialLogin: login } = this.props;
    const { search } = location;
    const userProfile = queryString.parse(search);

    const {
      userName,
      email,
      token,
      updatedAt,
      createdAt,
    } = userProfile;

    const id = parseInt(userProfile['?id'], 10);

    const userData = {
      id,
      userName,
      email,
      updatedAt,
      createdAt,
    };

    login(token, userData);
  }

  componentDidUpdate() {
    const { auth, history } = this.props;
    const { isAuthenticated } = auth;
    redirectToDashboard(isAuthenticated, history);
  }

  render() {
    return (
      <Loader />
    );
  }
}

SocialAuth.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.shape({}),
  }).isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
  location: PropTypes.shape(locationPropTypes).isRequired,
  socialLogin: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ auth }) => (
  {
    auth,
  }
);

export default withRouter(connect(mapStateToProps, { socialLogin })(SocialAuth));
