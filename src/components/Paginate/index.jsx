import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import './index.scss';

class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      width: '',
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  resize = () => {
    this.setState({ width: window.innerWidth <= 450 });
  }

  paginateReduce = (trueArg, falseArg) => {
    const { width } = this.state;

    const data = width ? trueArg : falseArg;
    return data;
  }

  render() {
    const { article, paginate } = this.props;
    const { totalPages } = article;
    const pageRange = this.paginateReduce(1, 2);
    return (
      <div className="Pagination" data-test="Pagination">
        <ReactPaginate
          previousLabel="PREV"
          nextLabel="NEXT"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={totalPages}
          marginPagesDisplayed={pageRange}
          pageRangeDisplayed={pageRange}
          onPageChange={paginate}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  article: PropTypes.object.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
