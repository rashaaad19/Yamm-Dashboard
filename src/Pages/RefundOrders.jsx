import { useEffect, useState } from "react";
import DataTable from "../Components/DataTable";
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

  //function to filter and update the orders based on user Input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredOrders = ordersData.filter((order) =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Read data from server
  const {
    data: orders,
    loading,
    error,
    sendRequest,
  } = useFetch("http://localhost:3000/orders", "GET"); //specify action to GET for read requests

  // params: base url and patch method to trigger edit requests
  // return: function to trigger updates
  const { sendRequest: sendEditRequest } = useFetch(
    "http://localhost:3000/orders",
    "PATCH"
  );

  //Onchange handler passed from the component tree
  //params: id of selected item and decision
  //triggers state update and server update based on user selection
  const handleDecisionChange = async (id, decision) => {
    const selectedOrder = ordersData.find((order) => order.id === id);
    console.log(decision)
    try {
      //trigger fetching function to edit the item in database
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
      //accept toaster notification
      if (decision === "Accept") {
        toast.success(`Order ${selectedOrder.id} is accepted`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      //reject toaster notification
      if (decision === "Reject") {
        toast.error(`Order ${selectedOrder.id} is rejected`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      //warning toaster notification
      if (decision === "Escalate") {
        toast.warning(`Order ${selectedOrder.id} is escalated`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      if (decision === "Not Yet") {
        toast.warning(`Order ${selectedOrder.id} is yet to be decided`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      
    } catch (error) {
      console.error("Error updating decision:", error);
    }
  };

  //onChange function passed as prop and fires when the user switch the order status
  //params: id of selected element and new active status
  const handleStatusChange = async (id, active) => {
    const selectedOrder = ordersData.find((order) => order.id === id);
    //trigger fetching function to edit the item in database
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

  //Effect to get the data form database
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  //Effect to update the state when orders changes to reflect spontaneously on UI
  useEffect(() => {
    if (orders) {
      setOrdersData(orders); 
    }
  }, [orders]);

  //Pagination custom hook that takes the orders and the number of elements per page
  //Returns page and items states to update the UI, and a function to navigate to pages
  const {
    currentPage,
    totalPages,
    currentItems: currentOrders,
    handlePageChange,
  } = usePagination(filteredOrders, 15);
  return (
    <>
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
