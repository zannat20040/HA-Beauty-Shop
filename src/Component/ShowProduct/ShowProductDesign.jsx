import React from "react";
import { Link } from "react-router-dom";

const ShowProductDesign = ({ data }) => {

  const { type, rating, productName, price, image, brandName } = data;
  return (
    <div className="card bg-base-100 shadow rounded-none">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{productName}</h2>
        <p>{brandName}</p>
        <p>{type}</p>
        <h2>{price}</h2>
        <p>{rating} / 5.00</p>
        <div className="card-actions">
          <Link to={`/${productName}/details`}>
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
