import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedArticle.scss';

const FeaturedArticle = (props) => {
  const {
    title,
    imageUrl,
    customClass,
  } = props;
  const {
    wrapperClass,
    imageClass,
    titleClass,
  } = customClass;
  return (
    <div className={`featured-article__wrapper ${wrapperClass}`}>
      <img src={imageUrl || 'https://res.cloudinary.com/free-spirit/image/upload/v1565357745/AH-assets/rose.png'} alt="" className={`featured-article__image ${imageClass}`} />
      <h3 className={`featured-article__title ${titleClass}`}>{title}</h3>
    </div>
  );
};

FeaturedArticle.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  customClass: PropTypes.objectOf(PropTypes.string),
};

FeaturedArticle.defaultProps = {
  customClass: { },
  imageUrl: '',
};

export default FeaturedArticle;
