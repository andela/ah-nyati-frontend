import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';
import TrendingSection from '../components/TrendingSection/TrendingSection';
import HorizontalBar from '../components/HorizontalBar/HorizontalBar';
import ArticleActions from '../actions/ArticleActions';
import Loader from '../components/Loader/Loader';
import Helpers from '../helpers/helpers';

const { fetchArticles } = ArticleActions;
const { setCount } = Helpers;

class Homepage extends Component {
  constructor(props) {
    super(props);
    const { allArticles } = this.props;
    this.state = {
      charCount: 120,
      articleArray: allArticles,
    };
    this.updateCharAt = this.updateCharAt.bind(this);
    this.loadItems = this.loadItems.bind(this);
  }

  componentDidMount() {
    const { fetchArticles: getArticles } = this.props;
    getArticles();
    this.updateCharAt();
    window.addEventListener('resize', this.updateCharAt);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCharAt);
  }

  loadItems() {
    const { articleArray } = this.state;
    const { allArticles } = this.props;
    this.setState(previousState => ({
      ...previousState,
      articleArray: articleArray.concat(allArticles),
    }));
  }

  updateCharAt() {
    const windowWidth = window.innerWidth;
    const count = setCount(windowWidth);
    this.setState({ charCount: count });
  }

  render() {
    const { allArticles } = this.props;
    const { charCount, articleArray } = this.state;
    if (allArticles.length === 0) {
      return <Loader />;
    }
    return (
      <div>
        <FeaturedSection data={allArticles} />
        <HorizontalBar />
        <TrendingSection data={articleArray} count={charCount} loadItems={this.loadItems} />
      </div>
    );
  }
}

Homepage.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  allArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { allArticles, loading } = state.article;
  return {
    allArticles,
    loading,
  };
};

export default connect(mapStateToProps, { fetchArticles })(Homepage);
