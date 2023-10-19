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
            className="menu menu-sm text-white dropdown-content translate-y-5 z-30 p-4 space-y-2 bg-blue-950 shadow w-52"
          >
            {navList}
          </ul>
        </div>
        <img src="https://i.ibb.co/W5JpYXp/H.png" alt="" className="w-16" />
        <p className=" text-3xl ml-3 font-bold text-blue-950 uppercase">HA Beauty</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-blue-950">
          {navList}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="drawer drawer-end text-end z-50">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="bg-blue-950 text-white px-8 py-3 btn tracking-widest font-normal hover:border-blue-950 hover:border-2 hover:bg-white hover:text-blue-950 rounded-none "
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
            <ul className="menu p-6 w-64 min-h-full bg-blue-950 text-white space-y-3">
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