import React from 'react';

const NavbarDesign = ({drawerList,navList}) => {
    return (
        <div className="shadow">
     <div className="navbar  container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden rounded-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-base dropdown-content translate-y-5 z-[1] p-4 space-y-2  shadow w-52"
          >
            {navList}
          </ul>
        </div>
        <img src="https://i.ibb.co/W5JpYXp/H.png" alt="" className="w-16" />
        <a className="btn btn-ghost normal-case text-3xl">HA Beauty</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-base">
          {navList}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="drawer drawer-end text-end z-20">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="bg-sky-200 px-8 py-3 "
            >
              Profile
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-6 w-64 min-h-full bg-sky-200 text-base space-y-3">
              {drawerList}
            </ul>
          </div>
        </div>
      </div>
    </div>
   </div>
    );
};

export default NavbarDesign;