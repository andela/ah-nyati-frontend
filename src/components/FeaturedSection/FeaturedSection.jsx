import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper/Wrapper';
import FeaturedArticle from '../FeaturedArticle/FeaturedArticle';
import './FeaturedSection.scss';

const FeaturedSection = ({ data }) => {
  const featuredArticles = [
    {
      title: 'Article 1',
      imageUrl: '',
    },
    {
      title: 'Article 2',
      imageUrl: 'src/assets/butterfly.svg',
    },
    {
      title: 'Article 3',
      imageUrl: 'src/assets/flower.svg',
    },
    {
      title: 'Article 4',
      imageUrl: 'src/assets/emerald.svg',
    },
    {
      title: 'Article 5',
      imageUrl: 'src/assets/rose.svg',
    },
  ];

  const bigCustomClass = {
    wrapperClass: 'big-wrapper',
    imageClass: 'big-image',
    titleClass: 'big-title',
  };

  const smallCustomClass = {
    wrapperClass: 'small-wrapper',
    imageClass: 'small-image',
    titleClass: 'small-title',
  };

  const { title: bigArticleTitle, imageUrl: bigArticleImageUrl } = data[0];
  featuredArticles.splice(0, 1);
  return (
    <Wrapper customClass="featured-main-wrapper">
      <FeaturedArticle
        title={bigArticleTitle}
        imageUrl={bigArticleImageUrl}
        customClass={bigCustomClass}
      />
      <Wrapper customClass="featured-side-wrapper">
        <Wrapper customClass="featured-sub-wrapper">
          <FeaturedArticle
            customClass={smallCustomClass}
            title={data[1].title}
            imageUrl={featuredArticles[0].imageUrl}
          />
          <FeaturedArticle
            customClass={smallCustomClass}
            title={data[2].title}
            imageUrl={featuredArticles[1].imageUrl}
          />
        </Wrapper>
        <Wrapper customClass="featured-sub-wrapper">
          <FeaturedArticle
            customClass={smallCustomClass}
            title={data[3].title}
            imageUrl={featuredArticles[2].imageUrl}
          />
          <FeaturedArticle
            customClass={smallCustomClass}
            title={data[4].title}
            imageUrl={featuredArticles[3].imageUrl}
          />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

FeaturedSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeaturedSection;
