import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import ArticleCard from '../ArticleCard/Index';
import './TrendingSection.scss';
import { trendingArticles } from '../componentData/trendingSectionData';

const TrendingSection = (props) => {
  const {
    data,
    count,
    loadItems,
  } = props;
  let key = 0;

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadItems}
      hasMore
      loader=""
      className="wrapper row mx-2 my-3"
    >
      {
        data.map((article, index) => {
          const {
            imageUrl,
            date,
            readTime,
            likeCount,
          } = trendingArticles[index % 5];
          const {
            title,
            body,
            views,
          } = article;

          key += 1;

          return (
            <ArticleCard
              title={title}
              imageUrl={imageUrl}
              text={body}
              date={date}
              readTime={readTime}
              likeCount={likeCount}
              viewCount={views}
              count={count}
              key={key}
            />
          );
        })
      }
    </InfiniteScroll>
  );
};

TrendingSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  count: PropTypes.number,
  loadItems: PropTypes.func.isRequired,
};

TrendingSection.defaultProps = {
  count: 3,
};

export default TrendingSection;
