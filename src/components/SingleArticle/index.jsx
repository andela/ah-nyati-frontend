import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainArticle from './MainArticle';
import articleActions from '../../actions/ArticleActions';
import Tags from './Tags';
import Recommended from './Recommended';
import CommentsBtn from './CommentsBtn';
import Loader from '../Loader';
import './index.scss';

const { viewArticle, fetchArticles } = articleActions;

export class SingleArticle extends Component {
  state = {}

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.viewArticle(slug, this.props.history);
    this.props.fetchArticles(10, 1);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      const { slug } = this.props.match.params;
      this.props.viewArticle(slug);
    }
  }

  render() {
    if (this.props.article === {} || this.props.loading) {
      return <Loader />;
    }
    return (
      <div className="container article-container">
        <MainArticle {...this.props.article} />
        <Tags {...this.props.article} />
        <Recommended {...this.props.recommendedArticles} />
        <CommentsBtn />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  article: state.singleArticle.article,
  loading: state.singleArticle.loading,
  recommendedArticles: state.article,
});

SingleArticle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  viewArticle: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  article: PropTypes.shape({}).isRequired,
  recommendedArticles: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, { viewArticle, fetchArticles })(SingleArticle);
