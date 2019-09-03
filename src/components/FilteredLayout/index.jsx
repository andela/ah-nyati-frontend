import React from 'react';
import PropType from 'prop-types';
import { Trail } from 'react-spring/renderprops.cjs';
import { Link } from 'react-router-dom';
import LikeIcon from '../articleLayout/LikeIcon';
import './index.scss';

const FilteredArticleLayout = (props) => {
  const { article: { allArticles } } = props;

  if (allArticles[0] === 'No Article Found') {
    return (
      <div className="article-not-found">{props.article[0]}</div>
    );
  }

  const URL = '/articles/';

  /* istanbul ignore next */
  return (
    <Trail
      items={allArticles.articles}
      keys={singleArticle => singleArticle.id}
      from={{ marginLeft: -80, opacity: 0, transform: 'translate3d(0,-40px,0)' }}
      to={{ marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)' }}
    >
      {singleArticle => prop => (
        <div style={prop} className="col p-0 articles">
          <Link to={URL + singleArticle.slug} className="linky-2 row no-gutters overflow-hidden flex-md-row mb-4 h-md-250 position-relative articles-article">
            <div className="col-auto d-lg-block">
              <img
                className="bd-placeholder-img"
                src={
                  singleArticle.imageUrl === '' ? 'https://i1.wp.com/www.africanbusinesscentral.com/wp-content/uploads/2018/07/Andela.jpeg' : singleArticle.imageUrl
                }
                alt=""
              />
            </div>
            <div className="col pl-4 d-flex flex-column position-static articles-right">
              <h3 className="mb-3 articles-title">{singleArticle.title}</h3>
              <p className="card-text mb-3">{`${singleArticle.body.substring(0, 150)}...`}</p>
              <div className="d-flex flex-row articles-feature">
                <LikeIcon likeCount={0} />
                <span className="mr-2 ml-2 articles-line" />
                <p className="articles-category">Education</p>
                <span className="mr-2 ml-2 articles-line" />
                <p className="d-flex flex-column justify-content-center articles-comment">
                  <span className="d-flex justify-content-center font-bold">0</span>
                  Comments
                </p>
                <span className="mr-2 ml-2 articles-line" />
                <p className="d-flex flex-column justify-content-center articles-view">
                  <span className="d-flex justify-content-center font-bold">{singleArticle.views}</span>
                  Views
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </Trail>
  );
};


FilteredArticleLayout.propTypes = {
  article: PropType.shape({
    allArticles: PropType.shape({
      articles: PropType.shape([]),
    }),
  }).isRequired,
};

export default FilteredArticleLayout;
