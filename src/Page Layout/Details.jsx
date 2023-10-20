import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { productName } = useParams();
  const productDetails = useLoaderData();
  //   console.log(productDetails)
  const findDetails = productDetails.find(
    (data) => data.productName === productName
  );

  //   const [cartProduct, setCartProduct] = useState([])
  const HandleAddToCart = () => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(findDetails),
    })
      .then((res) =>{
        if (res.status === 200) {
          swal({
            title: "Success!",
            text: "You have added a product into My Cart!",
            icon: "success",
          });
        } else if (res.status === 400) {
          swal({
            title: "Error!",
            text: "You have already added this product",
            icon: "error",
          });
        }
return(res.json())
      } )
      .then((data) => console.log(data))
  };

  return (
    <div className="container mx-auto px-6 mt-28 className = 'text-blue-950 text-base'">
      <div className="card grid grid-cols-1 md:grid-cols-3  gap-6 bg-base-100 justify-center items-center">
        <figure className="">
          <img src={findDetails.image} alt="Album" />
        </figure>
        <div className="card-body col-span-2 ">
          <h2 className="card-title">{findDetails.productName}</h2>
          <p className="text-blue-950 text-base">{findDetails?.description}</p>
          <p className="text-blue-950 text-base">
            Band Name: {findDetails.brandName}
          </p>
          <p className="text-blue-950 text-base">Type: {findDetails.type}</p>
          <p className="text-blue-950 text-base">Price: {findDetails.price}</p>
          <p className="text-blue-950 text-base">
            Rating: {findDetails.rating} out of 5.00
          </p>
          <div className="card-actions">
            <button
              onClick={HandleAddToCart}
              className=" btn py-3 bg-blue-950 hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950 text-white font-normal tracking-widest border-0 px-8  w-fit rounded-none"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
