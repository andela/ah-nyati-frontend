import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Helpers from '../../../helpers/helpers';
import './Tags.scss';

const { setFilterTag, slugGen } = Helpers;

const articleTags = (props) => {
  const {
    tags,
  } = props;

  if (tags) {
    if (tags[0] !== '') {
      return (
        <>
          {tags.map((tag) => {
            const tagSlug = slugGen(tag);
            return (
              <Link to={`tagged/${tagSlug}`} onClick={() => setFilterTag(tag)} className="tags" key={tag}>
                {tag}
              </Link>
            );
          })}
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
