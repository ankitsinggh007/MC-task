import React from "react";

function Pagination({ currentPage, itemsPerPage, onPageChange, totalItems }) {
  let lastPage = Math.ceil(totalItems / itemsPerPage)||1;
  console.log(lastPage, "lastpage");
  return (
    <div className="mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`rounded-full px-2 py-3 text-black mx-2 + ${currentPage === 1 ? "bg-gray-400" : "bg-green-400"}`}
      >
        prev
      </button>
      <span className="bg-gray-300 rounded-full px-4 py-3 text-black mx-2">
        {currentPage}
      </span>
      <button
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
        className={`rounded-full px-2 py-3 text-black mx-2 + ${currentPage === lastPage ? "bg-gray-400" : "bg-green-400"}`}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
