import React from "react";
import { PaginaitonButton, PaginationComponent, PaginationSpan } from "./Styled-Components/PaginationComponent";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationComponent>
      <PaginaitonButton
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </PaginaitonButton>
      <PaginaitonButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PaginaitonButton>
      <PaginationSpan>
        Page {currentPage} of {totalPages}
      </PaginationSpan>
      <PaginaitonButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginaitonButton>
      <PaginaitonButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </PaginaitonButton>
    </PaginationComponent>
  );
};

export default Pagination;