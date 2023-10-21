import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Custom.css";
import NvabarDesign from "./NavbarDesign";
import NavbarDesign from "./NavbarDesign";
import { AuthContext } from "../Auth-Component/AuthProvider";
import Cart from "../../Page Layout/Cart";

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);

  const navList = (
    <>
      <NavLink
        to="/"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "black" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="addproduct"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "black" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        Add Product
      </NavLink>
      <NavLink
        to="mycart"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "black" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        My Cart
      </NavLink>
    </>
  );

  return (
    <NavbarDesign
      navList={navList}
      user={user}
      loading={loading}
      signOutUser={signOutUser}
    ></NavbarDesign>
  );
};

export default Navbar;
