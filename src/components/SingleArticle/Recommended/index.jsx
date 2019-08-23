import React from 'react';
import './Recommended.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const articleImage = 'https://i1.wp.com/www.africanbusinesscentral.com/wp-content/uploads/2018/07/Andela.jpeg';

const recommended = (props) => {
  const {
    allArticles,
  } = props;

  if (allArticles[0]) {
    const URL1 = `/articles/${allArticles[0].article.slug}`;
    const URL2 = `/articles/${allArticles[1].article.slug}`;
    const URL3 = `/articles/${allArticles[2].article.slug}`;

    let image1 = allArticles[0].article.imageUrl;
    if (image1 === '') image1 = articleImage;

    let image2 = allArticles[1].article.imageUrl;
    if (image2 === '') image2 = articleImage;

    let image3 = allArticles[2].article.imageUrl;
    if (image3 === '') image3 = articleImage;


    return (
      <div>
        <h3 className="recommended">Recommended Articles</h3>
        <div className="row">
          <Link to={URL1} className="col-lg-4 rec linky">
            <img src={image1} alt="" className="rec-img" />
            <h4 className="rec-title">{allArticles[0].article.title}</h4>
          </Link>

          <Link to={URL2} className="col-lg-4 rec linky">
            <img src={image2} alt="" className="rec-img" />
            <h4 className="rec-title">{allArticles[1].article.title}</h4>
          </Link>

          <Link to={URL3} className="col-lg-4 rec linky">
            <img src={image3} alt="" className="rec-img" />
            <h4 className="rec-title">{allArticles[2].article.title}</h4>
          </Link>
        </div>
      </div>
    );
  }
  return null;
};

recommended.propTypes = {
  allArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default recommended;
