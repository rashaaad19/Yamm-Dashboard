import { useState } from "react";
import DataTable from "../Components/DataTable";
import PageHeader from "../Components/PageHeader";
import useFetch from "../hooks/useFetch";
import usePagination from "../hooks/usePagination";

const RefundOrders = () => {
  const tableHeaders = [
    "ID",
    "Reason",
    "Store Name",
    "Store Logo",
    "Store Website",
    "Amount",
    "Active",
    "Decision",
    "Items",
  ];
  //Fetch logic
  const {
    data: orders,
    loading,
    error,
  } = useFetch("http://localhost:3000/orders");

  //Search logic
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //Pagination Logic
  const {
    currentPage,
    totalPages,
    currentItems: currentOrders,
    handlePageChange,
  } = usePagination(filteredOrders, 15);

  // Log the props being passed to DataTable
  console.log("Props being passed to DataTable:", {
    caption: "Refund Requests",
    tableHeaders,
    currentOrders,
    loading,
    currentPage,
    totalPages,
    handlePageChange,
  });

  return (
    <>
      {/* <PageHeader /> */}
      <DataTable
        caption="Refund Requests"
        tableHeaders={tableHeaders}
        currentOrders={currentOrders}
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        onSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />
    </>
  );
};

export default RefundOrders;
