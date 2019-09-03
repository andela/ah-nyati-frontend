import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'bootstrap-4-react';
import jwtDecode from 'jwt-decode';
import MainArticle from './MainArticle';
import articleActions from '../../actions/ArticleActions';
import Tags from './Tags';
import Recommended from './Recommended';
import CommentsBtn from './CommentsBtn';
import Loader from '../Loader';
import SocialShare from '../socialShare';
import './index.scss';
import DropLeft from './RatingsBtn/index';
import RatingsModal from './RatingsModal/index';
import { articleRating } from '../../actions/article.action';

const { viewArticle, fetchArticles } = articleActions;

export class SingleArticle extends Component {
  state = {
    value: 0,
  }

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

  onStarClick = (nextValue) => {
    this.setState({ value: nextValue });
  }


handleRatingsSubmit = () => {
  const { match } = this.props;
  const { params: { slug } } = match;
  const { value } = this.state;
  const { articleRating: articleRate } = this.props;
  articleRate(slug, value);
}

checkUser = () => {
  const token = localStorage.jwtToken;
  const decoded = jwtDecode(token);
  const { id } = decoded;
  const { userId } = this.props.article;
  if (id !== userId) {
    return true;
  }
}

render() {
  const token = localStorage.jwtToken;
  if (this.props.article === {} || this.props.loading) {
    return <Loader />;
  }
  const { value } = this.state;
  return (
    <div className="container article-container">
      <MainArticle {...this.props.article} />
      <SocialShare article={this.props.article} />
      <Tags {...this.props.article} />
      { token && this.checkUser() && <DropLeft id="dropleft"/>}
      <Modal id="ratingsModal" fade>
        <RatingsModal
          title="Article Ratings"
          rating={value}
          starClick={this.onStarClick}
          handleRatingsSubmit={this.handleRatingsSubmit}
        />
      </Modal>
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
  articleRating: PropTypes.func.isRequired,
  article: PropTypes.shape({}).isRequired,
  recommendedArticles: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps,
  { viewArticle, fetchArticles, articleRating })(SingleArticle);
