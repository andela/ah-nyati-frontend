import React from 'react';
import PropTypes from 'prop-types';
import './PasswordReset.scss';

const FormContainer = props => (
  <div>
    <div className="cont">
      <div className="form-div row">
        <div className="col-sm-7">
          <blockquote className="intro">
            {' '}
                “Write. Rewrite. When not writing or rewriting,
                read. I know of no shortcuts.”
            <br />
            <br />
                —
            {' '}
            <cite> Larry L. King, WD</cite>
            {' '}

            {' '}
          </blockquote>
        </div>
        {props.children}
      </div>
    </div>
  </div>
);

FormContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
export default FormContainer;
