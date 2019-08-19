// react libraries
import React from 'react';
import { Link } from 'react-router-dom';
import propType from 'prop-types';
import './Error.scss';
/**
 * @desc renders home page
 * @returns component NotFound
 */
const Error = ({ statusCode, message }) => (
  <div className="Container">
    <div className="ErrorBox">
      <div className="ErrorMessage">
        <svg
          width="250"
          height="150"
          viewBox="0 0 345 222"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M306.5 111C306.5 170.617 251.086 219.5 182 219.5C112.914 219.5 57.5 170.617 57.5 111C57.5 51.3827 112.914 2.5 182 2.5C251.086 2.5 306.5 51.3827 306.5 111Z"
            stroke="#EF2215"
            strokeWidth="5"
          />
          <line
            x1="1.89246"
            y1="194.759"
            x2="343.892"
            y2="25.7587"
            stroke="#EF2215"
            strokeWidth="5"
          />
        </svg>
        <h2>{statusCode}</h2>
        <p>{message}</p>
        <p className="Link">
          Go to
          <Link to="/"> Homepage </Link>
        </p>
      </div>
    </div>
  </div>
);

Error.propTypes = {
  statusCode: propType.number.isRequired,
  message: propType.string.isRequired,
};

export default Error;
