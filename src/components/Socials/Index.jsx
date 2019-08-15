import React from 'react';
import './socials.scss';

const socials = () => (
  <div className="d-flex">
    <div className="col-md-3">
      <a href="hello.com">
        <i className="fab fa-google-plus social" />
      </a>
    </div>

    <div className="col-md-3">
      <a href="hello.com">
        <i className="fab fa-facebook social" />
      </a>
    </div>

    <div className="col-md-3">
      <a href="hello.com">
        <i className="fab fa-twitter social" />
      </a>
    </div>

    <div className="col-md-3">
      <a href="hello.com">
        <i className="fab fa-github social" />
      </a>
    </div>
  </div>
);

export default socials;
