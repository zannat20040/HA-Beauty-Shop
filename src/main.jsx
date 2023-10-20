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
import Cart from "./Page Layout/Cart";
import Update from "./Component/Update-data/Update";
import SignUp from "./Component/Sign UP/SignUp";
import Login from "./Component/Login/Login";

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
        loader: (params) => fetch("http://localhost:5000/products"),
      },
      {
        path: "/:productName/details",
        element: <Details></Details>,
        loader: (params) => fetch("http://localhost:5000/products"),
      },
      {
        path: "/mycart",
        element: <Cart></Cart>,
        loader: (params) => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/update",
        element: <Update></Update>,
        loader: (params) => fetch("http://localhost:5000/products"),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
