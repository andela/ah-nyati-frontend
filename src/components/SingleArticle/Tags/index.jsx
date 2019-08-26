import React from 'react';
import PropTypes from 'prop-types';
import './Tags.scss';

const articleTags = (props) => {
  const {
    tags,
  } = props;

  if (tags) {
    if (tags[0] !== '') {
      return (
        <>
          {tags.map(tag => (
            <div className="tags" key={tag}>
              {tag}
            </div>
          ))}
        </>
      );
    }
  }

  return null;
};

articleTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

articleTags.defaultProps = {
  tags: [''],
};

export default articleTags;
