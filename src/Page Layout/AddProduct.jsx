import React, { useState } from "react";
import AddProductForm from "../Component/AddProductForm";
import swal from "sweetalert";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [isRatingGreaterThenFive, setIsRatingGreaterThenFive] = useState(false);
  const navigate = useNavigate();

  const HandleProductAdd = (e) => {
    e.preventDefault();
    const formTarget = e.target;
    const productName = formTarget.productName.value;
    const brandName = formTarget.brandName.value;
    const type = formTarget.type.value;
    const price = formTarget.price.value;
    const rating = formTarget.rating.value;
    const description = formTarget.description.value;
    const image = formTarget.image.value;

    const newProduct = {
      image,
      productName,
      brandName,
      type,
      price,
      rating,
      description,
    };

    if (rating> 5) {
      setIsRatingGreaterThenFive(true);
    } else {
      setIsRatingGreaterThenFive(false);
      fetch("https://ha-beauty-server.vercel.app/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            swal({
              title: "Success!",
              text: "You have added a new product!",
              icon: "success",
            });
          }
          navigate(`/${brandName}/products`);
        });
    }
  };

  return (
    <div className="container mx-auto px-6 pb-24">
      <h1 className="mt-16 text-center  text-5xl uppercase text-blue-950 font-semibold">
        Launch Your product
      </h1>
      <p className=" text-sm uppercase tracking-[10px] text-center">
        New Arrivals Await
      </p>

      <AddProductForm HandleProductAdd={HandleProductAdd} isRatingGreaterThenFive={isRatingGreaterThenFive}></AddProductForm>
    </div>
  );
};

export default AddProduct;
