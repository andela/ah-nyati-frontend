import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Dummy Login Page, should allow the user to log into the app successfully
 * it also holds the link to the dummy Home page
 */
const Dashboard = () => (
  <div>
    <h1>Welcome To your Dashboard.</h1>
    <h3>Welcome To your Dashboard</h3>
    <ul>
      <li>
        <Link to="/">CLICK HERE TO GO BACK TO THE HOME PAGE</Link>
      </li>
    </ul>
  </div>
);

export default Dashboard;
