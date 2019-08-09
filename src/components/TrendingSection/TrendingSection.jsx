import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Wrapper from '../Wrapper/Wrapper';
import ArticleCard from '../ArticleCard/ArticleCard';
import './TrendingSection.scss';
import { trendingArticles } from '../componentData/trendingSectionData';

const TrendingSection = ({ data, count, loadItems }) => {
  let key = 0;

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadItems}
      hasMore
      loader="loading..."
    >
      <Wrapper customClass="trending-main-wrapper">
        {
          data.map((article) => {
            const {
              imageUrl,
              date,
              readTime,
              likeCount,
            } = trendingArticles[1];
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
      </Wrapper>
    </InfiniteScroll>
  );
};

TrendingSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  count: PropTypes.number.isRequired,
  loadItems: PropTypes.func.isRequired,
};

export default TrendingSection;
