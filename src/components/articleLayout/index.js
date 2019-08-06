import React from 'react';
import PropType from 'prop-types';
import './index.scss';
import svg from '../../svg';

export default function articleLayout(props) {
  const { article } = props;
  const { articles } = article;
  if (articles[0] === 'No Article Found') {
    return (
      <div className="article-not-found">{props.article[0]}</div>
    );
  }

  const allArticles = articles.map((singleArticle) => {
    return (
      <div className="article" key={singleArticle.id}>
        <img
          src={
          singleArticle.imageUrl === '' ? 'https://i1.wp.com/www.africanbusinesscentral.com/wp-content/uploads/2018/07/Andela.jpeg' : singleArticle.imageUrl[0]
        }
          alt=""
        />
        <div className="article-content">
          <h3 className="article-title">{singleArticle.title}</h3>
          <p className="article-desc">{`${singleArticle.body.substring(0, 250)}...`}</p>
          <div className="article-feature">
            <p className="article-like"><img src={svg.play} alt="" /></p>
            <p className="article-category">Cat</p>
            <p className="article-comment">Comments</p>
            <p className="article-view">{singleArticle.views}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>{allArticles}</div>
  );
}

articleLayout.propTypes = {
  article: PropType.object.isRequired,
  articles: PropType.array,
};
