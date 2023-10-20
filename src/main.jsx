import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ErrorPage from './Page Layout/ErrorPage';
import Root from './Page Layout/Root';
import Home from './Page Layout/Home';
import AddProduct from './Page Layout/AddProduct';
import ShowProduct from './Component/ShowProduct/ShowProduct';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/:brandName/products',
        element:<ShowProduct></ShowProduct>,
        loader:(params)=>fetch('https://brand-shop-server-7un65oqym-zannat20040.vercel.app/products')
      },

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
