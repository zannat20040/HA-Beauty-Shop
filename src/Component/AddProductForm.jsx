import React from "react";

const AddProductForm = ({ HandleProductAdd, isRatingGreaterThenFive }) => {
  return (
    <form onSubmit={HandleProductAdd}>
      <div className="space-y-3 mt-20 md:w-9/12 w-full mx-auto">
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
            type="text"
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
            <option>Shampoo</option>
            <option>Conditionar</option>
          </select>
        </div>
        <div className=" grid grid-cols-2 gap-4">
          <div>
            <input
              name="rating"
              required
              type="number"
              placeholder="Rating out of 5"
              className="input input-bordered w-full rounded-none border-blue-950"
            />
            {isRatingGreaterThenFive && (
              <span className="font-bold mt-3 text-red-500">
                Please give rating out of 5
              </span>
            )}
          </div>
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
  );
};

export default AddProductForm;
