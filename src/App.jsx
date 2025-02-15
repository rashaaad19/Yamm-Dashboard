import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DataTable from "./Components/DataTable";
import Root from "./Pages/Root";
import RefundOrders from "./Pages/RefundOrders";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Wow so easy !");

  let router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        {
          path: "",
          Component: RefundOrders,
        },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
