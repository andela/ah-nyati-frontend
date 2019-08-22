import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleLayout from '../components/articleLayout';
import Pagination from '../components/Paginate';
import getAllArticles from '../actions/articlesAction';
import Loader from '../components/Loader';

export class GetAllArticles extends Component {
  constructor() {
    super();
    this.state = {
      article: {
        allArticles: ['No Article Found'],
      },
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.getAllArticles();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { articles, isLoading } = nextProps.articles;
    if (articles === '') {
      return null;
    }
    return ({ article: articles, isLoading });
  }

  paginate = (data) => {
    const currentPage = data.selected;
    const offset = currentPage + 1;
    this.props.getAllArticles(offset);
  }

  render() {
    const { article, isLoading } = this.state;

    if (isLoading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div className="padding-both mt-4">
        <div className="d-flex align-items-center justify-content-between mt-5 mb-4 top-section">
          <h4 className="">Latest Articles</h4>
          <input type="text" className="search-form" placeholder="Search..." />
        </div>
        <ArticleLayout article={article} />
        <Pagination article={article} paginate={this.paginate} />
      </div>
    );
  }
}

GetAllArticles.propTypes = {
  getAllArticles: PropTypes.func.isRequired,
  articles: PropTypes.object,
};

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps, { getAllArticles })(GetAllArticles);
