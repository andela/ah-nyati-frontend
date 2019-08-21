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
    <div className="col-12 col-lg-6 my-2 my-lg-3">
      <div className="row h-100">
        <img src={imageUrl || 'https://res.cloudinary.com/free-spirit/image/upload/v1566195129/AH-assets/20180601091038_h5b109d0e0d71f.jpg'} alt="" className="article-card__image col-6" />
        <div className="col-6 article-card__aside">
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
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  date: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  viewCount: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

ArticleCard.defaultProps = {
  text: '',
};

export default ArticleCard;
