import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaMoneyCheck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdWorkspacePremium } from "react-icons/md";

const Policy = () => {
  return (
    <>
      <div className="px-6">
      <div className="text-center mt-24 text-blue-950">
        <h1 className="text-5xl uppercase font-semibold ">
          What we offer
        </h1>
        <p className="text-sm uppercase tracking-[10px] mt-3">To you</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10  container mx-auto gap-5">
        <div className="flex gap-4 items-center justify-center  py-7">
          <LiaShippingFastSolid className="text-7xl text-blue-950"></LiaShippingFastSolid>
          <div>
          <h1 className="card-title text-blue-950 text-lg uppercase">
            Super Fast Delivery
          </h1>
          <p className="text-gray-600 font-medium ">Experience lightning-fast delivery. </p>
          </div>
        </div>
        <div className="flex gap-4  items-center justify-center  py-7">
          <FaMoneyCheck className="text-7xl text-blue-950"></FaMoneyCheck>
          <div>
          <h1 className="card-title text-blue-950 text-lg uppercase">
            Free Delivery
          </h1>
          <p className="text-gray-600 font-medium ">
          Enjoy the convenience of free delivery.
          </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center  py-7">
          <GiReturnArrow className="text-7xl text-blue-950"></GiReturnArrow>
          <div>
          <h1 className="card-title text-blue-950 text-lg uppercase">
            Refuning
          </h1>
          <p className="text-gray-600 font-medium ">
          We ensures hassle-free returns and refunds.
          </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center  py-7">
          <MdWorkspacePremium className="text-7xl text-blue-950"></MdWorkspacePremium>
          <div>
          <h1 className="card-title text-blue-950 text-lg uppercase">
          Quality Assurance
          </h1>
          <p  className="text-gray-600 font-medium ">Our commitment to ensures you quality.</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Policy;
