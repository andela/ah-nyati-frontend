import React from 'react';
import PropTypes from 'prop-types';

const LikeIcon = ({ likeCount }) => (
  <p className="articles-like mr-3">
    <i className="fas fa-thumbs-up fa-xs articles-like-icon" />
    <span className="articles-like-count">{likeCount}</span>
  </p>
);

LikeIcon.propTypes = {
  likeCount: PropTypes.number,
};

LikeIcon.defaultProps = {
  likeCount: '',
};

export default LikeIcon;
