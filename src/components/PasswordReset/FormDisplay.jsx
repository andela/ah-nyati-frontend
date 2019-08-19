import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = props => (
  <div>
    <div className="cont">
      <div className="form-div form-div3 row">
        <div className="col-sm-7 content">
          <h3 className="intro2">
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
          </h3>
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
