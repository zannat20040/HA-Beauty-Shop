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
      <NavLink to='name'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "black" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active-link" :"inactive-link";
        }}
      >
        Name
      </NavLink>
      <NavLink to='img'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "active-link" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        Img
      </NavLink>
      <NavLink to='signup'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "black" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        Sign up
      </NavLink>
      <NavLink to='signin'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "black" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        Sign in
      </NavLink>
    </>
  );
  return <NavbarDesign drawerList={drawerList} navList={navList}></NavbarDesign>
};

export default Navbar;
