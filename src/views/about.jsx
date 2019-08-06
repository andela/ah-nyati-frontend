import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Dummy Login Page, should allow the user to log into the app successfully
 * it also holds the link to the dummy Home page
 */
const About = () => (
  <div>
    <h1>Welcome To Authors Haven About Page.</h1>
    <h3>Good to see you</h3>
    <ul>
      <li>
        <Link to="/">CLICK HERE TO GO BACK TO THE HOMEPAGE</Link>
      </li>
    </ul>
  </div>
);

export default About;
