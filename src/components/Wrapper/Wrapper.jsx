import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.scss';

const Wrapper = ({ children, customClass }) => (
  <div className={`wrapper ${customClass}`}>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
  customClass: PropTypes.string,
};

Wrapper.defaultProps = {
  customClass: '',
};

export default Wrapper;
