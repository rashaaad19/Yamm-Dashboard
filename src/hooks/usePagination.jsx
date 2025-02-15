import { useState } from "react";

//params: the data, and limit of items in single page initially set to 15
//return: current active page, total number of page, current displayed items, and function to trigger changes
const usePagination = (data, itemsPerPage = 15) => {
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Get last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Get first item of the current page
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
