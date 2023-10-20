import React from "react";
import { Link } from "react-router-dom";

const ShowProductDesign = ({ data }) => {

  const { type, rating, productName, price, image, brandName } = data;
  return (
    <div className="card bg-base-100 shadow rounded-none">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-start text-start ">
        <h2 className="card-title text-start text-blue-950 uppercase">{productName}
        </h2>
        <p className="text-gray-500 tracking-widest font-semibold">{brandName} / {type} </p>
        <h2 className="text-2xl text-blue-950 ">{price}</h2>
        <span className="text-blue-950 tracking-widest">({rating} out of 5.00)</span>
        <div className="card-actions w-full">
          <Link to={`/${productName}/details`} className="w-full">
          <button className=" btn py-3 bg-blue-950 hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950 text-white font-normal tracking-widest border-0 px-8  w-full rounded-none">
            Details
          </button></Link>

          <button className=" btn py-3 bg-blue-950 hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950 text-white font-normal tracking-widest border-0 px-8  w-full rounded-none">
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowProductDesign;
