import React from 'react';
import PropType from 'prop-types';
import { Trail } from 'react-spring/renderprops.cjs';
import './index.scss';

const ArticleLayout = (props) => {
  const {
    article: {
      allArticles,
    },
  } = props;

  if (allArticles[0] === 'No Article Found') {
    return (
      <div className="article-not-found">{props.article[0]}</div>
    );
  }

  /* istanbul ignore next */
  return (
    <Trail
      items={allArticles}
      keys={singleArticle => singleArticle.article.id}
      from={{ marginLeft: -80, opacity: 0, transform: 'translate3d(0,-40px,0)' }}
      to={{ marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)' }}
    >
      {singleArticle => prop => (
        <div style={prop} className="col p-0 articles">
          <div className="row no-gutters overflow-hidden flex-md-row mb-4 h-md-250 position-relative articles-article">
            <div className="col-auto d-lg-block">
              <img
                className="bd-placeholder-img"
                src={
                  singleArticle.article.imageUrl === '' ? 'https://i1.wp.com/www.africanbusinesscentral.com/wp-content/uploads/2018/07/Andela.jpeg' : singleArticle.article.imageUrl
                }
                alt=""
              />
            </div>
            <div className="col pl-4 d-flex flex-column position-static articles-right">
              <h3 className="mb-3">{singleArticle.article.title}</h3>
              <p className="card-text mb-3">{`${singleArticle.article.body.substring(0, 150)}...`}</p>
              <div className="d-flex flex-row articles-feature">
                <p className="articles-like mr-3">
                  <i className="fas fa-thumbs-up fa-xs articles-like-icon" />
                  <span className="articles-like-count">{singleArticle.likes}</span>
                </p>
                <span className="mr-2 ml-2 articles-line" />
                <p className="articles-category">{singleArticle.article.Category.name}</p>
                <span className="mr-2 ml-2 articles-line" />
                <p className="d-flex flex-column justify-content-center articles-comment">
                  <span className="d-flex justify-content-center font-bold">{singleArticle.comments}</span>
                  Comments
                </p>
                <span className="mr-2 ml-2 articles-line" />
                <p className="d-flex flex-column justify-content-center articles-view">
                  <span className="d-flex justify-content-center font-bold">{singleArticle.article.views}</span>
                  Views
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Trail>
  );
};


ArticleLayout.propTypes = {
  article: PropType.object.isRequired,
  articles: PropType.array
};

export default ArticleLayout;
