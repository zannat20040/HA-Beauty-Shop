import React from "react";

const CartDesign = ({ data, Handledelete }) => {
  
    
  return (
    <div className="card bg-base-100 shadow rounded-none">
      <figure className="px-10 pt-10">
        <img src={data.image} alt="Shoes" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.productName}</h2>
        <p>Price: {data.price}</p>
        <div className="card-actions">
          <button
            onClick={()=>Handledelete(data._id)}
            className=" btn py-3 bg-blue-950 hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950 text-white font-normal tracking-widest border-0 px-8  w-fit rounded-none"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDesign;
