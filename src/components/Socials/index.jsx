import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import './socials.scss';

const serverBaseUrl = 'https://ah-nyati-backend-staging.herokuapp.com';

const socials = ({ action }) => (
  <div className="d-flex row social-login">
    <div className="col-md-3">
      <a data-for="Google" data-tip href={`${serverBaseUrl}/api/v1/auth/google`}>
        <img
          className="google-icon"
          src="https://res.cloudinary.com/free-spirit/image/upload/v1566476471/AH-assets/google-icon.png"
          alt="google icon"
        />
      </a>
    </div>

    <div className="col-md-3">
      <a data-for="Facebook" data-tip href={`${serverBaseUrl}/api/v1/auth/facebook`}>
        <i className="fab fa-facebook social" />
      </a>
    </div>

    <div className="col-md-3">
      <a data-for="Twitter" data-tip href={`${serverBaseUrl}/api/v1/auth/twitter`}>
        <i className="fab fa-twitter social" />
      </a>
    </div>

    <div className="col-md-3">
      <a data-for="Github" data-tip href={`${serverBaseUrl}/api/v1/auth/github`}>
        <i className="fab fa-github social" />
      </a>
    </div>
    <ReactTooltip
      id="Google"
      className="tool-tip"
      place="top"
      type="Info"
      effect="float"
    >
      {`${action} with Google`}
    </ReactTooltip>
    <ReactTooltip
      id="Facebook"
      className="tool-tip"
      place="top"
      type="Info"
      effect="float"
    >
      {`${action} with Facebook`}
    </ReactTooltip>
    <ReactTooltip
      id="Twitter"
      className="tool-tip"
      place="top"
      type="Info"
      effect="float"
    >
      {`${action} with Twitter`}
    </ReactTooltip>
    <ReactTooltip
      id="Github"
      className="tool-tip"
      place="top"
      type="Info"
      effect="float"
    >
      {`${action} with Github`}
    </ReactTooltip>
  </div>
);

socials.propTypes = {
  action: PropTypes.string,
};

socials.defaultProps = {
  action: 'Login',
};

export default socials;
