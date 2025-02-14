import { useState } from "react";

const usePagination = (data, itemsPerPage = 15) => {
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Get current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
  };
};

export default usePagination;