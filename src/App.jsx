import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DataTable from "./Components/DataTable";
import Root from "./Pages/Root";
import RefundOrders from "./Pages/RefundOrders";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Settings from "./Pages/Settings";
import Reports from "./Pages/Reports";
import Profile from "./Pages/Profile";
import ItemProfile from "./Pages/ItemProfile";
import  {loader as itemLoader} from "./Pages/ItemProfile"

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
        {
          path: "settings",
          Component: Settings,
        },{
          path: "reports",
          Component: Reports,
        },{
          path: "profile",
          Component: Profile,
        },
        {
          path:":id",
          Component:ItemProfile,
          loader:itemLoader,
        }
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
