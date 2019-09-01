import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import './MainArticle.scss';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import decodeToken from '../../../utils/decoded';
import ArticleActions from '../../../actions/ArticleActions';
import Helpers from '../../../helpers/helpers';

const { setAppElement } = Helpers;

setAppElement(process.env.NODE_ENV, Modal);

const { deleteArticle } = ArticleActions;
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export class MainArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      isSubmitted: false,
    };
  }

  componentDidUpdate() {
    const { isSubmitted } = this.state;
    const { response, error, history } = this.props;
    const { goBack } = history;
    if (isSubmitted && response === 'Article successfully deleted') {
      toastr.success(response, 'taking you back to previous page...');
      this.setState(prevState => ({ isSubmitted: !prevState.isSubmitted }));
      setTimeout(() => goBack(), 4000);
    } else if (isSubmitted && error === 'Request failed with status code 404') {
      toastr.success('Article not found', 'taking you back to previous page...');
      this.setState(prevState => ({ isSubmitted: !prevState.isSubmitted }));
      setTimeout(() => goBack(), 4000);
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  }

  handleSubmit = () => {
    const { slug, deleteArticle: deleteOwnArticle } = this.props;
    deleteOwnArticle(slug);
    this.setState(prevState => ({ isSubmitted: !prevState.isSubmitted }));
  }

  render() {
    const {
      title, articleBody, views, readTime, author, userId, slug,
    } = this.props;
    const { isVisible } = this.state;

    let viewInfo = 'Views';
    const URL = `/profile/${userId}`;

    if (views < 2) {
      viewInfo = 'View';
    }

    let { imageUrl } = this.props;

    const backupImage = 'https://i1.wp.com/www.africanbusinesscentral.com/wp-content/uploads/2018/07/Andela.jpeg';

    if (imageUrl === '') {
      imageUrl = backupImage;
    }

    return (
      <div className="main-article">
        <h1 className="article-title">{title}</h1>
        <p className="article-stats">
          <span className="time-key">
            {`${readTime} `}
          </span>
        min read
        </p>

        <p className="article-stats views-stat">
          <span className="stat-num">
            {views}
          </span>
          {viewInfo}
        </p>

        <Link to={URL} className="linky">
          <p className="article-stats author linky">
            <span className="author-key">
              Author
            </span>
            {` ${author}`}
          </p>
        </Link>
        {
        userId === decodeToken().id
        && (
        <div className="action-button-wrapper float-right">
          <button type="button" onClick={this.toggleModal} className="editText action-button del-btn del-btn-grp float-right">
            Delete
          </button>
          <span className="editText action-button float-right">
            <Link to={`/updatearticle/${slug}`} className="linky">
              Edit
            </Link>
          </span>
        </div>
        )
      }

        <div className="img-container">
          <img src={imageUrl} alt="article" className="main-img" />
        </div>

        <div className="write-up">
          {articleBody}
        </div>
        <Modal
          isOpen={isVisible}
          contentLabel="Delete confirm modal"
          style={modalStyles}
        >
          <p className="modal-text">Are you sure you want to delete this article?</p>
          <div className="row modal-btn-wrapper">
            <button type="button" onClick={this.toggleModal} className="editText del-cancel-btn del-btn-grp col-3 offset-2">
              cancel
            </button>
            <button type="button" onClick={this.handleSubmit} className="editText del-confirm-btn del-btn-grp col-3 offset-2">
              confirm
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

MainArticle.propTypes = {
  title: PropTypes.string,
  articleBody: PropTypes.string,
  imageUrl: PropTypes.string,
  views: PropTypes.number,
  author: PropTypes.string,
  readTime: PropTypes.number,
  deleteArticle: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  response: PropTypes.string,
  error: PropTypes.string,
  slug: PropTypes.string,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

MainArticle.defaultProps = {
  imageUrl: '',
  title: '',
  articleBody: '',
  views: 0,
  author: '',
  readTime: 0,
  response: 'success',
  error: 'error',
  slug: 'valid-slug-84jfb4ur',
  history: {
    goBack: () => {},
  },
};

const mapStateToProps = (state) => {
  const { article, err } = state;
  const { response } = article;
  const { error } = err;
  return {
    response,
    error,
  };
};

export default withRouter(connect(mapStateToProps, { deleteArticle })(MainArticle));
