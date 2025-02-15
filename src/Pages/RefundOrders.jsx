import { useEffect, useState } from "react";
import DataTable from "../Components/DataTable";
import PageHeader from "../Components/PageHeader";
import useFetch from "../hooks/useFetch";
import usePagination from "../hooks/usePagination";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget the CSS

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
    const selectedOrder = ordersData.find((order) => order.id === id);
    console.log(decision);
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
      if (decision === "Accept") {
        //accept toaster notification
        toast.success(
          `Order ${selectedOrder.id} is accepted`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      }

      if (decision === "Reject") {
        //reject toaster notification
        toast.error(
          `Order ${selectedOrder.id} is rejected`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      }
      if (decision === "Escalate") {
        //warning toaster notification
        toast.warning(
          `Order ${selectedOrder.id} is escalated`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      }

    } catch (error) {
      console.error("Error updating decision:", error);
    }
  };

  //Active Status Logic
  const handleStatusChange = async (id, active) => {
    const selectedOrder = ordersData.find((order) => order.id === id);

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
      //toaster notification
      toast.info(
        `Order ${selectedOrder.id} is ${
          !selectedOrder.active === false ? "not active" : "active"
        } now`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
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
