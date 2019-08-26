import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeaturedSection from '../components/FeaturedSection/Index';
import TrendingSection from '../components/TrendingSection/Index';
import HorizontalBar from '../components/HorizontalBar/Index';
import ArticleActions from '../actions/ArticleActions';
import Loader from '../components/Loader';
import Helpers from '../helpers/helpers';

const { fetchArticles, getMoreArticles, viewArticle } = ArticleActions;
const {
  setCount,
  removeDuplicate,
} = Helpers;

export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charCount: 120,
    };
    this.updateCharAt = this.updateCharAt.bind(this);
    this.loadItems = this.loadItems.bind(this);
  }

  componentDidMount() {
    const { fetchArticles: getArticles } = this.props;
    localStorage.setItem('currentPage', 1);
    localStorage.setItem('hasMore', true);

    getArticles(5, 1);
    this.updateCharAt();
    window.addEventListener('resize', this.updateCharAt);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCharAt);
  }

  loadItems() {
    const total = parseInt(localStorage.getItem('total'), 10);

    if (total < 29) {
      const { fetchArticles: getArticles } = this.props;
      const currentPage = parseInt(localStorage.getItem('currentPage'), 10);
      const nextPage = currentPage + 1;

      getArticles(1, nextPage);

      localStorage.setItem('currentPage', nextPage);
    }
  }

  updateCharAt() {
    const windowWidth = window.innerWidth;
    const count = setCount(windowWidth);
    this.setState({ charCount: count });
  }

  render() {
    const { allArticles } = this.props;
    const { charCount } = this.state;
    const currentArr = removeDuplicate(allArticles, 'article.id');
    localStorage.setItem('total', currentArr.length);
    if (allArticles.length === 0) {
      return <Loader />;
    }
    return (
      <div className="home-page-wrapper pt-5">
        <FeaturedSection data={currentArr} />
        <HorizontalBar />
        <TrendingSection
          data={currentArr}
          count={charCount}
          loadItems={this.loadItems}
        />
      </div>
    );
  }
}

Homepage.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  allArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { allArticles, currentArticles, totalArticles } = state.article;

  return {
    allArticles,
    currentArticles,
    totalArticles,
  };
};

export default connect(mapStateToProps, { fetchArticles, getMoreArticles, viewArticle })(Homepage);
