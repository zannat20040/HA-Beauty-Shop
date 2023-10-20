import React from "react";
import AddProductForm from "../Component/AddProductForm";
import swal from 'sweetalert';

const AddProduct = () => {
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


    fetch("http://localhost:5000/products", {
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
      });
  };

  return (
    <div className="container mx-auto px-6 pb-24">
      <h1 className="mt-16 text-center  text-5xl uppercase text-blue-950 font-semibold">
        Launch Your product
      </h1>
      <p className=" text-sm uppercase tracking-[10px] text-center">
        New Arrivals Await
      </p>

      <AddProductForm HandleProductAdd={HandleProductAdd}></AddProductForm>
    </div>
  );
};

export default AddProduct;
