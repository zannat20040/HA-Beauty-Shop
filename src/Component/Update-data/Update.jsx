import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import swal from "sweetalert";


const Update = () => {
  const [isRatingGreaterThenFive, setIsRatingGreaterThenFive] = useState(false);

  const product = useLoaderData();
  const navigate = useNavigate()

  const { _id, type, rating, productName, price, image, brandName, description  } = product;
  // console.log(product)
  const handleProduct = event => {
      event.preventDefault();

      const form = event.target;

      const type = form.type.value;
      const rating = form.rating.value;
      const productName = form.productName.value;
      const price = form.price.value;
      const image = form.image.value;
      const brandName = form.brandName.value;
      const description = form.description.value;

      const updatedProduct = { type,rating,productName,price,image,brandName,description }

      // console.log(updatedProduct)
      if (rating> 5) {
        setIsRatingGreaterThenFive(true);
      }
      else{
        setIsRatingGreaterThenFive(false);

        fetch(`https://ha-beauty-server.vercel.app/products/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(updatedProduct)
      })
          .then(res => res.json())
          .then(data => {
              if (data.modifiedCount > 0) {
                swal("Great", "You have updated this product successfully!", "success");
              }
              navigate(`/${brandName}/products`)

          })
      }
      // send data to the server
     
    }

  return (
    <div className="container mx-auto px-6 pb-24">
      <h1 className="mt-16 text-center  text-5xl uppercase text-blue-950 font-semibold">
        Update your product
      </h1>
      <p className=" text-sm uppercase tracking-[10px] text-center">
        Customize as your self
      </p>
      <form onSubmit={handleProduct}>
        <div className="space-y-3 mt-20 md:w-9/12 w-full mx-auto">
          <div className=" grid grid-cols-2 gap-4">
            <input
            defaultValue={productName}
              required
              type="text"
              name="productName"
              placeholder="Product Name"
              className="input input-bordered w-full rounded-none border-blue-950"
            />
            <input
              required
              defaultValue={price}
              type="Number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full rounded-none border-blue-950"
            />
          </div>
          <div className=" grid grid-cols-2 gap-4">
            <select
            defaultValue={brandName}
              name="brandName"
              required
              className="select select-bordered w-full rounded-none border-blue-950"
            >
              <option disabled selected>
                Brand Name
              </option>
              <option>L'Oreal</option>
              <option>MAC Cosmetics</option>
              <option>Maybelline</option>
              <option>Fenty Beauty</option>
              <option>NARS</option>
              <option>Dior</option>
            </select>

            <select
            defaultValue={type}
              name="type"
              required
              className="select select-bordered w-full rounded-none border-blue-950"
            >
              <option disabled selected>
                Product Type
              </option>
              <option>Foundation</option>
              <option>Blush</option>
              <option>Highlighter</option>
              <option>Lipstick</option>
              <option>Mascara</option>
              <option>Primer</option>
              <option>Setting spray</option>
              <option>Perfume</option>
              <option>Concealer</option>
              <option>Bronzer</option>
              <option>Cream</option>
            </select>
          </div>
          <div className=" grid grid-cols-2 gap-4">
           

<div>
<input
            defaultValue={rating}
              name="rating"
              required
              type="number"
              placeholder="Rating"
              className="input input-bordered w-full rounded-none border-blue-950"
            />
            {isRatingGreaterThenFive && (
              <span className="font-bold mt-3 text-red-500">
                Please give rating out of 5
              </span>
            )}
          </div>

            <input
            defaultValue={image}
              type="text"
              name="image"
              required
              placeholder="Photo url"
              className="input input-bordered w-full rounded-none border-blue-950"
            />
          </div>
          <textarea
          defaultValue={description}
            name="description"
            required
            id=""
            placeholder="Product Description"
            className="input input-bordered w-full h-40 rounded-none  border-blue-950"
          ></textarea>
          <button className=" btn py-3 bg-blue-950 hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950 text-white font-normal tracking-widest border-0 px-8  w-full rounded-none">
            Add this Product
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Update;
