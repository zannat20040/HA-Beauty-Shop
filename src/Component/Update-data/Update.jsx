import React from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
    const data = useLoaderData();
    const { type, rating, productName, price, image, brandName, description, _id} = data;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const type = form.type.value;
        const rating = form.rating.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const image = form.image.value;
        const brandName = form.brandName.value;
        const description = form.description.value;

        const updatedProduct = { type, rating, productName, price, image, brandName,description }

        // console.log(updatedProduct);

        // send data to the server
        fetch(`https://brand-shop-server-two.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                  swal("Updated successfuully");

                }
            })
    }

  return (
    <div className="container mx-auto px-6 pb-24">
      <h1 className="mt-16 text-center  text-5xl uppercase text-blue-950 font-semibold">
        LauUpdatench Your product
      </h1>
      <p className=" text-sm uppercase tracking-[10px] text-center">
        Customize Your product
      </p>
      <form onSubmit={handleUpdate}>
        <div className="space-y-3 mt-20">
          <div className=" grid grid-cols-2 gap-4">
            <input
              required
              type="text"
              name="productName"
              placeholder="Product Name"
              className="input input-bordered w-full rounded-none border-blue-950"
            />
            <input
              required
              type="Number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full rounded-none border-blue-950"
            />
          </div>
          <div className=" grid grid-cols-2 gap-4">
            <select
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
            <input
              name="rating"
              required
              type="number"
              placeholder="Rating"
              className="input input-bordered w-full rounded-none border-blue-950"
            />

            <input
              type="text"
              name="image"
              required
              placeholder="Photo url"
              className="input input-bordered w-full rounded-none border-blue-950"
            />
          </div>
          <textarea
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
