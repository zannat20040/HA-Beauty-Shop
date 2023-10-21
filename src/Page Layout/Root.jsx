import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
