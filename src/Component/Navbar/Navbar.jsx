import React from "react";
import { NavLink } from "react-router-dom";
import "../../Custom.css"
import NvabarDesign from "./NavbarDesign";
import NavbarDesign from "./NavbarDesign";

const Navbar = () => {


  const navList = (
    <>
      <NavLink to='/'
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
      <NavLink to='addproduct'
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
      <NavLink to='mycart'
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
  const drawerList = (
    <>
      
    </>
  );
  return <NavbarDesign drawerList={drawerList} navList={navList}></NavbarDesign>
};

export default Navbar;
