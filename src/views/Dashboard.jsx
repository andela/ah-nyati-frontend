import React from 'react';
import decodeToken from '../utils/decoded';
import AuthUserProfile from '../components/Dashboard/index';

/**
 * User Dashboard Page, user should be redirected to this page after successful login
 */
const style = {
  color: 'red',
  marginLeft: '20px',
};

const { isVerified } = decodeToken();

const Profile = () => (
  <div>
    {
      isVerified === false && (
      <h4 style={style}>
      Please verify your account. A verification link has been sent to your email
      </h4>
      )
  }
    <AuthUserProfile />
  </div>
);

export default Profile;
