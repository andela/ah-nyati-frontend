import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper/Index';
import FeaturedArticle from '../FeaturedArticle/Index';
import './FeaturedSection.scss';

const FeaturedSection = ({ data }) => {
  const featuredArticles = [
    {
      title: 'Article 1',
      imageUrl: 'https://res.cloudinary.com/free-spirit/image/upload/v1565889455/AH-assets/tetty-bear-image-24.gif',
    },
    {
      title: 'Article 2',
      imageUrl: 'https://res.cloudinary.com/free-spirit/image/upload/v1566193937/AH-assets/Hi_-_Tech_3.jpg',
    },
    {
      title: 'Article 3',
      imageUrl: 'https://res.cloudinary.com/free-spirit/image/upload/v1566194045/AH-assets/67_defensivelinerushes.0.jpg',
    },
    {
      title: 'Article 4',
      imageUrl: 'https://res.cloudinary.com/free-spirit/image/upload/v1565889454/AH-assets/ac37ce86f144e6bd4c4dede9eece3c6df3c1ea97_tom-oldham-h6d-50c-sample1.jpg',
    },
    {
      title: 'Article 5',
      imageUrl: 'https://res.cloudinary.com/free-spirit/image/upload/v1566194110/AH-assets/desk2x.jpg',
    },
  ];

  const bigCustomClass = {
    wrapperClass: 'big-wrapper col-12 col-lg-5 pr-lg-2 py-2',
    imageClass: 'big-image',
    titleClass: 'big-title',
  };

  const smallCustomClass = {
    wrapperClass: 'small-wrapper col-6 px-2 py-2',
    imageClass: 'small-image',
    titleClass: 'small-title',
  };

  const { title: bigArticleTitle, imageUrl: bigArticleImageUrl } = data[0].article;
  featuredArticles.splice(0, 1);
  return (
    <Wrapper customClass="row mx-2">
      <FeaturedArticle
        title={bigArticleTitle}
        slug={data[0].article.slug}
        imageUrl={bigArticleImageUrl}
        customClass={bigCustomClass}
      />
      <Wrapper customClass="featured-side-wrapper col-12 col-lg-7 px-2">
        <Wrapper customClass="featured-sub-wrapper row pl-lg-3">
          <FeaturedArticle
            customClass={smallCustomClass}
            title={data[1].article.title}
            slug={data[1].article.slug}
            imageUrl={featuredArticles[0].imageUrl}
          />
          <FeaturedArticle
            customClass={smallCustomClass}
            title={data[2].article.title}
            slug={data[2].article.slug}
            imageUrl={featuredArticles[1].imageUrl}
          />
        </Wrapper>
        <Wrapper customClass="featured-sub-wrapper row pl-lg-3">
          <FeaturedArticle
            customClass={smallCustomClass}
            title={data[3].article.title}
            slug={data[3].article.slug}
            imageUrl={featuredArticles[2].imageUrl}
          />
          <FeaturedArticle
            customClass={smallCustomClass}
            title={data[4].article.title}
            slug={data[4].article.slug}
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
