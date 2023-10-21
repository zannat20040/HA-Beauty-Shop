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
import AuthProvider from "./Component/Auth-Component/AuthProvider";
import PrivateRoute from "./Page Layout/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/:brandName/products",
        element: <ShowProduct></ShowProduct>,
        loader: () =>
          fetch("https://brand-shop-server-two.vercel.app/products"),
      },
      {
        path: "/:productName/details",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://brand-shop-server-two.vercel.app/products"),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-shop-server-two.vercel.app/cart"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-two.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
