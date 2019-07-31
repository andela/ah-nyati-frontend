import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Dummy Error Component,renders when a user visits an unmatched url
 */
const Error = () => (
  <div>
    <h1>Oops, Something went wrong, This is a 404 error page</h1>
    <h3>Good to see you</h3>
    <ul>
      <li>
        <Link to="/">CLICK HERE TO GO BACK TO HOMEPAGE</Link>
      </li>
    </ul>
  </div>
);

export default Error;
