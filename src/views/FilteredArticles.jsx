import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleLayout from '../components/FilteredLayout';
import Pagination from '../components/Paginate';
import ArticleActions from '../actions/ArticleActions';
import Loader from '../components/Loader';

const { getArticlesByTag } = ArticleActions;

export class FilteredArticles extends Component {
  componentDidMount() {
    const { getArticlesByTag: getArticles } = this.props;
    const tag = localStorage.getItem('filterTag');
    getArticles(tag, 1);
  }

  paginate = (data) => {
    const tag = localStorage.getItem('filterTag');
    const currentPage = data.selected;
    const offset = currentPage + 1;
    this.props.getArticlesByTag(tag, offset);
  }

  render() {
    const tag = localStorage.getItem('filterTag');
    const { articles, loading } = this.props;
    const { articleCount } = articles.allArticles;
    const pageCount = Math.ceil(parseInt(articleCount, 10) / 5);
    const article = { allArticles: articles.allArticles, totalPages: pageCount };

    if (article.length === 0 || loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div className="padding-both mt-4">
        <div className="d-flex align-items-center justify-content-between mt-5 mb-4 top-section">
          <h4 className="">{`Tagged: ${tag}`}</h4>
          <input type="text" className="search-form" placeholder="Search..." />
        </div>
        <ArticleLayout article={article} />
        <Pagination article={article} paginate={this.paginate} />
      </div>
    );
  }
}

FilteredArticles.propTypes = {
  getArticlesByTag: PropTypes.func.isRequired,
  articles: PropTypes.shape({
    allArticles: PropTypes.shape({
      articleCount: PropTypes.number,
    }),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  articles: {
    allArticles: state.article.articlesByTag,
  },
  loading: state.article.loading,
});

export default connect(mapStateToProps, { getArticlesByTag })(FilteredArticles);
