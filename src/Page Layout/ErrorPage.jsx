import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 class="block text-7xl font-bold text-blue-950 sm:text-9xl">404</h1>
      <p class="mt-3 text-blue-950 ">Oops, something went wrong.</p>
      <p class="text-blue-950 ">Sorry, we couldn't find your page.</p>
      <Link to="/">
        {" "}
        <button className=" btn py-3 mt-10 bg-blue-950 hover:text-blue-950 hover:bg-white  text-white font-normal tracking-widest border-0 px-8  w-fit  rounded-none uppercase">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
