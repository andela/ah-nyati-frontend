import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FeaturedArticle.scss';

const FeaturedArticle = (props) => {
  const {
    title,
    imageUrl,
    customClass,
    slug,
  } = props;

  const {
    wrapperClass,
    imageClass,
    titleClass,
  } = customClass;

  const URL = `articles/${slug}`;

  return (
    <Link to={URL} className={`featured-article__wrapper linky ${wrapperClass}`}>
      <img src={imageUrl || 'https://res.cloudinary.com/free-spirit/image/upload/v1566832343/AH-assets/default-image.jpg'} alt="" className={`featured-article__image ${imageClass}`} />
      <h3 className={`featured-article__title ${titleClass}`}>{title}</h3>
    </Link>
  );
};

FeaturedArticle.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  slug: PropTypes.string,
  customClass: PropTypes.objectOf(PropTypes.string),
};

FeaturedArticle.defaultProps = {
  customClass: { },
  imageUrl: '',
  slug: '',
};

export default FeaturedArticle;
