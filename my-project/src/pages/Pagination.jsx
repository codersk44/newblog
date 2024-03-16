import React from "react";

const Pagination = ({ onPageChange, currentPage, blogs, pagesize }) => {
  const totalePages = Math.ceil(blogs.length / pagesize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalePages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePaginaton" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {" "}
            {pageNumber}{" "}
          </a>
        </li>
      )
    );
  };

  return (
    <ul  className=' pagination my-8 flex-we' >
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div className='flex gap-1' >{renderPaginationLinks()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalePages}
        >
          Next{" "}
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
