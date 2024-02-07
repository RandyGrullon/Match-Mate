// components/Pagination.js
import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

const Pagination = ({ pageCount, onPageChange, initialPage }) => {
  return (
    <div className="pb-10">
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onPageChange}
        initialPage={initialPage}
        previousLabel={"←"}
        nextLabel={"→"}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={"pagination flex justify-center mt-4"}
        activeClassName={"bg-blue-500 text-white"}
        previousClassName={"border rounded p-2 mr-2 border-gray-300"}
        nextClassName={"border rounded p-2 ml-2 border-gray-300"}
        pageClassName={"border rounded-full p-2 m-1 border-gray-300"}
        pageLinkClassName={"hover:bg-blue-200"}
      />
    </div>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
};

export default Pagination;
