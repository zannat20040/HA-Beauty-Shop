import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowProductDesign from "./ShowProductDesign";

const ShowProduct = () => {
  const { brandName } = useParams();
  const serviceData = useLoaderData();
  const filteredata = serviceData.filter(
    (data) => data.brandName === brandName
  );

  const [sliderImage , setSliderImage] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/slider')
    .then(res=>res.json())
    .then(data=>setSliderImage(data))
  },[])

  console.log(sliderImage)

  return (
    <div className="container mx-auto px-6">
      <h1 className="  mt-5 text-center mb-10 text-5xl uppercase text-blue-950 font-semibold">
        {brandName}
      </h1>
      <p className=" text-sm uppercase tracking-[10px] text-center">
        Enhance Your Natural Beauty with our Stunning Selection
      </p>

      <div className="grid grid-cols-4 gap-6 mt-28">
        {filteredata.length === 0 ? (
          <p className=" text-lg   text-center block col-span-4 font-medium text-gray-500" >No products available</p>
        ) : (
          filteredata.map((data) => (
            <ShowProductDesign data={data} key={data._id}></ShowProductDesign>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowProduct;
