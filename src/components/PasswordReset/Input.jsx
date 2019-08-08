import React from 'react';
import './PasswordReset.scss';
import Proptypes from 'prop-types';


const Input = ({
  id, name, type, value, title, className, ...rest
}) => (
  <div>
    <input
        //  className="text-input"
      id={name}
      name={name}
      type={type}
      value={value}
      {...rest}
    />
  </div>
);

Input.propTypes = {
  id: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  className: Proptypes.string.isRequired,
  value: Proptypes.oneOfType([Proptypes.string, Proptypes.number]).isRequired,
};

export default Input;
