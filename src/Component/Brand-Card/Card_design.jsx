import React from "react";
import { Link } from "react-router-dom";

const Card_design = ({ brand }) => {
  // console.log(brand)
  const { brandName, image } = brand;

  return (
    <div className=" bg-base-100 shadow-xl image-full rounded-none relative">
      <figure>
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
      <div className="w-full h-full bg-black bg-opacity-40 flex-col items-start  rounded-none absolute bottom-0 flex justify-end left-0 right-0 p-5">
        <h2 className="card-title text-white tracking-widest font-normal uppercase text-2xl">
          {brandName}
        </h2>
        <div className="card-actions w-36 mt-4 ">
          <Link to={`/${brandName}/products`}>
            <button className=" btn py-3 bg-blue-950 hover:text-blue-950 hover:bg-white  text-white font-normal tracking-widest border-0 px-8  w-full rounded-none">
              Visit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card_design;
