import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './profile.scss';

const defaultArticle = 'https://i1.wp.com/www.africanbusinesscentral.com/wp-content/uploads/2018/07/Andela.jpeg';

function ProfileArticles(props) {
  const { profileArticles } = props;
  const { articles } = profileArticles || { articles: null };
  return (
    <div className="article-comp">
      <div className="container col-sm-12 col-md-8 bg-white text-dark centering">
        <div className="">
          <div className="row">
            {articles && articles.map(article => (
              <Link to={`/articles/${article.slug}`} className="linky col-md-4 margin" key={article.id}>
                <div>
                  <img
                    src={article.imageUrl === '' || null ? defaultArticle : article.imageUrl}
                    alt=""
                    className="articleImages"
                  />
                </div>
                <h5 className="A-images">{`${article.title.substring(0, 20)}...`}</h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
ProfileArticles.propTypes = {
  profileArticles: propTypes.any,
  slug: propTypes.any,
};

export default ProfileArticles;
