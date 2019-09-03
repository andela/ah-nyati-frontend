import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pagination from '../Paginate';
import { getAuthUserPublishedArticles } from '../../actions/userActions';

const defaultArticle = 'https://i1.wp.com/www.africanbusinesscentral.com/wp-content/uploads/2018/07/Andela.jpeg';

export class PublishedArticles extends Component {
    state = {}

    componentDidMount() {
      const {
        auth: { user: { id: userId } },
      } = this.props;
      this.props.getAuthUserPublishedArticles(userId);
    }

      paginate = (data) => {
        const currentPage = data.selected;
        const offset = currentPage + 1;
        const { auth: { user: { id: userId } } } = this.props;
        this.props.getAuthUserPublishedArticles(userId, offset);
      };

      render() {
        const { userProfile: { published } } = this.props;
        const { articles = [] } = published;


        return (
          <div className="container col-sm-12 col-md-8 bg-white text-dark centering">
            <div className="tops">
              <div className="row">
                { articles.length === 0 ? (
                  <div className="fonts centering">
                  No published Articles
                  </div>
                )
                  : articles.map(article => (
                    <div className="col-md-4 margin article" key={article.id}>
                      <Link to={`/articles/${article.slug}`}>
                        <img
                          src={article.imageUrl === '' || null ? defaultArticle : article.imageUrl}
                          alt=""
                          className="articleImages"
                        />
                      </Link>
                      <h5 className="top article-title">
                        {`${article.title.substring(0, 20)}`}
                      </h5>
                    </div>
                  ))
              }
              </div>
            </div>
           

            <div>

              {articles.length !== 0 && (
              <Pagination
                article={published}
                paginate={this.paginate}
              />
              ) }
            </div>
          </div>
        );
      }
}

PublishedArticles.propTypes = {
  getAuthUserPublishedArticles: PropTypes.func.isRequired,
  auth: PropTypes.shape({ user: {} }).isRequired,
  userProfile: PropTypes.shape({ published: [] }).isRequired,
};

const mapStatetoProps = ({ userProfile, auth }) => ({
  userProfile,
  auth,
});

export default connect(mapStatetoProps,
  {
    getAuthUserPublishedArticles,
  })(PublishedArticles);
