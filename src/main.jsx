import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ErrorPage from "./Page Layout/ErrorPage";
import Root from "./Page Layout/Root";
import Home from "./Page Layout/Home";
import AddProduct from "./Page Layout/AddProduct";
import ShowProduct from "./Component/ShowProduct/ShowProduct";
import Details from "./Page Layout/Details";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/:brandName/products",
        element: <ShowProduct></ShowProduct>,
        loader: (params) =>
          fetch(
            "https://brand-shop-server-m1ktwmg9y-zannat20040.vercel.app/products"
          ),
      },
      {
        path: "/:productName/details",
        element: <Details></Details>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
