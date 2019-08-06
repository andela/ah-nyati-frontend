import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import './index.scss';

const pagination = ({ article, paginate }) => {
  const { totalPages } = article;
  return (
    <div className="Pagination">
      <ReactPaginate
        previousLabel={'PREV'}
        nextLabel={'NEXT'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={paginate}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

pagination.propTypes = {
  article: PropTypes.object.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default pagination;
