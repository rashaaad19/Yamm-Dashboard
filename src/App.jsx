import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DataTable from "./Components/DataTable";
import Root from "./Pages/Root";
import RefundOrders from "./Pages/RefundOrders";

function App() {
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
