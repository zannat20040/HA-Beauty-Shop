import React from "react";
import { Link } from "react-router-dom";

const SignupForm = ({ HandleRegister }) => {
  return (
    <div className="hero py-11">
      <div className="card flex-shrink-0 w-full max-w-md  bg-base-100 rounded-none">
        <div className="form-control">
          <h1 className=" text-white tracking-widest text-center font-semibold uppercase text-4xl py-6 bg-blue-950">
            Sign Up
          </h1>
        </div>
        <form
          className="card-body shadow rounded-none"
          onSubmit={HandleRegister}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm uppercase text-center">
                Your name
              </span>
            </label>
            <input
              type="text"
              placeholder="full name"
              className="input input-bordered rounded-none"
              required
              name="name"
            />
          </div>
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
                Photo url
              </span>
            </label>
            <input
              type="text"
              placeholder="url"
              className="input input-bordered rounded-none"
              required
              name="image"
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
              Sign up{" "}
            </button>
          </div>

          <p className="text-sm uppercase text-center mt-5 text-blue-950">
            Already Have an account?{" "}
            <Link
              to="/signin"
              className="label-text text-sm uppercase text-center font-semibold text-blue-950"
            >
              {" "}
              Sign in
            </Link>
          </p>
          {/* {registerSuccess && (
              <div>
                <p className="text-green-500 font-medium mt-3">
                  {registerSuccess}
                </p>
              </div>
            )} */}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
