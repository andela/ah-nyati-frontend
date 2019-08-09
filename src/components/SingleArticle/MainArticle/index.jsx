import React from 'react';
import './MainArticle.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import decodeToken from '../../../utils/decoded';

const mainArticle = (props) => {
  const {
    title, articleBody, views, readTime, author, userId, slug,
  } = props;

  let viewInfo = 'Views';
  const URL = `/profile/${userId}`;

  if (views < 2) {
    viewInfo = 'View';
  }

  let { imageUrl } = props;

  const backupImage = 'https://i1.wp.com/www.africanbusinesscentral.com/wp-content/uploads/2018/07/Andela.jpeg';

  if (imageUrl === '') {
    imageUrl = backupImage;
  }

  return (
    <div className="main-article">
      <h1 className="article-title">{title}</h1>
      <p className="article-stats">
        <span className="time-key">
          {`${readTime} `}
        </span>
        min read
      </p>

      <p className="article-stats views-stat">
        <span className="stat-num">
          {views}
        </span>
        {viewInfo}
      </p>

      <Link to={URL} className="linky">
        <p className="article-stats author linky">
          <span className="author-key">
        Author
          </span>
          {` ${author}`}
        </p>
      </Link>
      {
        userId === decodeToken().id
          && (
          <Link to={`/updatearticle/${slug}`} className="linky">
            <span className="editText float-right">Edit</span>
          </Link>
          )
        }

      <div className="img-container">
        <img src={imageUrl} alt="article" className="main-img" />
      </div>

      <div className="write-up">
        {articleBody}
      </div>
    </div>
  );
};

mainArticle.propTypes = {
  title: PropTypes.string,
  articleBody: PropTypes.string,
  imageUrl: PropTypes.string,
  views: PropTypes.number,
  author: PropTypes.string,
  readTime: PropTypes.number,
  userId: PropTypes.number.isRequired,
};

mainArticle.defaultProps = {
  imageUrl: '',
  title: '',
  articleBody: '',
  views: 0,
  author: '',
  readTime: 0,
};

export default mainArticle;
