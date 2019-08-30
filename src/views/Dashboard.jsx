import React from 'react';
import { Link } from 'react-router-dom';
import decodeToken from '../utils/decoded';

/**
 * Dummy Dashboard Page, user should be redirected to this page after successful login
 */
const style = {
  color: 'red',
  marginLeft: '20px',
};

const { isVerified } = decodeToken();

const Dashboard = (props) => {
  const { userId, userName } = props;
  return (
    <div>
      <h1>Welcome To Authors Haven Login Page.</h1>
      {
        isVerified === false && (
        <h4 style={style}>
        Please verify your account. A verification link has been sent to your email
        </h4>
        )
    }

      <ul>
        <li>
          <Link to="/">CLICK HERE TO GO BACK TO THE HOMEPAGE</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={`/profile/${userId}/${userName}`}>Click to view another Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
