import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/navbar';
import ArticleLayout from '../../components/articleLayout';
import Pagination from '../../components/pagination';
import { getAllArticles } from '../../actions/articlesAction';
import './index.scss';

class GetAllArticles extends Component {
  constructor() {
    super();
    this.state = {
      article: {
        articles: ['No Article Found'],
      },
    };
  }

  componentDidMount() {
    this.props.getAllArticles(10, 1);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      article: nextProps.articles,
    });
  }

  paginate = (e) => {
    console.log(e.target);
    this.props.getAllArticles(10, 2);
  }

  render() {
    const { article } = this.state;
    return (
      <div className="articles">
        <Navbar />
        <h4>Latest Articles</h4>
        <ArticleLayout article={article} />
        <Pagination article={article} paginate={this.paginate} />
      </div>
    );
  }
}

GetAllArticles.propTypes = {
  getAllArticles: PropTypes.func.isRequired,
  articles: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps, { getAllArticles })(GetAllArticles);
