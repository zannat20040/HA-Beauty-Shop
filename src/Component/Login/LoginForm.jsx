import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({HandleLogin}) => {
  return (
    <div className="hero py-11">
      <div className="card flex-shrink-0 w-full max-w-md  bg-base-100 rounded-none">
        <div className="form-control">
          <h1 className=" text-white tracking-widest text-center font-semibold uppercase text-4xl py-6 bg-blue-950">
            Sign in
          </h1>
        </div>
        <form
          className="card-body shadow rounded-none"
          onSubmit={HandleLogin}
        >
       
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-sm uppercase text-center">
                Your Email
              </span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered rounded-none"
              required
              name="email"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm uppercase text-center">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered rounded-none"
              required
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn py-3 bg-blue-950 hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950  text-white font-normal tracking-widest border-0 px-8  w-full rounded-none">
              Sign in
            </button>
          </div>

          <p className="text-sm uppercase text-center mt-5 text-blue-950">
            Don't you Have anu account?{" "}
            <Link
              to="/signup"
              className="label-text text-sm uppercase text-center font-semibold text-blue-950"
            >
              {" "}
              Sign Up
            </Link>
          </p>
          
          {/* <form action="" className="card-body pt-0" onSubmit={GoogleSignInHandler}>
            <p className="text-center">Or,</p>
            <div className="form-control ">
              <button className="btn btn-primary w-full mt-2 text-white bg-rose-700 border-0 hover:bg-black hover:text-white">
                Sign in with Google
              </button>
            </div>
            <p>
              New user?{" "}
              <Link to="/register" className="font-bold text-rose-700">
                Register
              </Link>
            </p>
            </form> */}
        
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
