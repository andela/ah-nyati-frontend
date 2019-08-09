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
      <img src={imageUrl || 'src/assets/image.png'} alt="" className={`featured-article__image ${imageClass}`} />
      <h3 className={`featured-article__title ${titleClass}`}>{title}</h3>
    </div>
  );
};

FeaturedArticle.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

FeaturedArticle.defaultProps = {
  customClass: '',
};

export default FeaturedArticle;
