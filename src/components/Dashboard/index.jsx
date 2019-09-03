import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './UserDashboard.scss';
import UserProfile from './UserProfile';
import UserArticles from './UserArticles';
import {
  authUserProfile,
  getAuthUserFollowers,
  getAuthUserFollowee,
  getAuthUserArticles,
} from '../../actions/userActions';


/**
 *
 *
 * UserDashboard
 * @extends {Component}
 */
export const UserDashboard = (props) => {
  if (props.auth !== null) {
    const { auth: { user: { userName, id: userId } } } = props;
    props.authUserProfile(userId);
    props.getAuthUserFollowers(userId);
    props.getAuthUserFollowee(userId);
    props.getAuthUserArticles(userName);
  }
  return (
    <div>
      <UserProfile />
      <UserArticles />
    </div>
  );
};

UserDashboard.propTypes = {
  authUserProfile: PropTypes.func.isRequired,
  getAuthUserFollowers: PropTypes.func.isRequired,
  getAuthUserFollowee: PropTypes.func.isRequired,
  getAuthUserArticles: PropTypes.func.isRequired,
  auth: PropTypes.shape().isRequired,
};

const mapStatetoProps = ({ auth }) => ({
  auth,
});


export default connect(mapStatetoProps, {
  authUserProfile,
  getAuthUserFollowers,
  getAuthUserFollowee,
  getAuthUserArticles,
})(UserDashboard);
