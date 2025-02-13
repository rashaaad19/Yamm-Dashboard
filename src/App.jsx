import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DataTable from "./Components/DataTable";
import Root from "./Pages/Root";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/orders");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);
  let router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        {
          path: "",
          Component: DataTable,
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
