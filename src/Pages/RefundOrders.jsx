import { useEffect, useState } from "react";
import DataTable from "../Components/DataTable";
import PageHeader from "../Components/PageHeader";
import useFetch from "../hooks/useFetch";
import usePagination from "../hooks/usePagination";

const RefundOrders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    "Actions",
  ];

  //Fetch logic
  const {
    data: orders,
    loading,
    error,
    sendRequest,
  } = useFetch("http://localhost:3000/orders", "GET");

  //Search logic
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredOrders = ordersData.filter((order) =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Pagination Logic
  const {
    currentPage,
    totalPages,
    currentItems: currentOrders,
    handlePageChange,
  } = usePagination(filteredOrders, 15);

  // Decising change logic
  const { sendRequest: sendEditRequest } = useFetch(
    "http://localhost:3000/orders",
    "PATCH"
  );
  const handleDecisionChange = async (id, decision) => {
    try {
      await sendEditRequest(id, {
        method: "PATCH",
        body: { decision },
      });
      // Update the state with the new decision
      setOrdersData((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id ? { ...order, decision } : order
        )
      );

      console.log("Decision updated successfully");
    } catch (error) {
      console.error("Error updating decision:", error);
    }
  };
  
  //Active Status Logic
  const handleStatusChange = async (id, active) => {
    try {
      await sendEditRequest(id, {
        method: "PATCH",
        body: { active },
      });
      // Update the state with the new decision
      setOrdersData((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id ? { ...order, active } : order
        )
      );

      console.log("Decision updated successfully");
    } catch (error) {
      console.error("Error updating decision:", error);
    }
  };

  //Effect to fetch the data
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  //Effect to update the state
  useEffect(() => {
    if (orders) {
      setOrdersData(orders); // Update `ordersData` when `orders` changes
    }
  }, [orders]);

  console.log(ordersData);
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
        searchTerm={searchTerm}
        handlePageChange={handlePageChange}
        handleDecisionChange={handleDecisionChange}
        handleStatusChange={handleStatusChange}
        onSearchChange={handleSearchChange}
      />
    </>
  );
};

export default RefundOrders;
