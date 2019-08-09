import React from 'react';
import PropTypes from 'prop-types';
import './ArticleCard.scss';

const ArticleCard = (props) => {
  const {
    title,
    text,
    date,
    imageUrl,
    readTime,
    likeCount,
    viewCount,
    count,
  } = props;

  const truncText = text.slice(0, count);

  return (
    <div className="article-card__wrapper">
      <img src={imageUrl || 'src/assets/articleImage.png'} alt="" className="article-card__image" />
      <div className="article-card__aside">
        <h3 className="article-card__title">{title}</h3>
        <p className="article-card__text line-clamp">{`${truncText}...`}</p>
        <p className="article-card__footer">
          {date}
           &nbsp;/&nbsp;
          {readTime}
        </p>
        <div className="article-card__highlights-bar">
          {likeCount}
          &nbsp;
          <i className="fas fa-thumbs-up article-card-icon" />
          &nbsp;
          &nbsp;
          {viewCount}
          &nbsp;
          Views
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ArticleCard;
