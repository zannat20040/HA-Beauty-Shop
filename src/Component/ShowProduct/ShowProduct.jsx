import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ShowProductDesign from "./ShowProductDesign";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ShowProduct = () => {
  const { brandName } = useParams();
  const serviceData = useLoaderData();
  const filteredata = serviceData.filter(
    (data) => data.brandName === brandName
  );

  const [sliderImage, setSliderImage] = useState([]);
  useEffect(() => {
    fetch("https://ha-beauty-server.vercel.app/slider")
      .then((res) => res.json())
      .then((data) => setSliderImage(data));
  }, []);

  const findBrand = sliderImage.find((data) => data.brandName === brandName);

  return (
    <>
      {/* slider section */}
      <div className="object-contain relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {findBrand &&
            findBrand.images.map((img) => (
              <SwiperSlide>
                <img src={img} alt="" className="" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* product display section */}
      <div className="container mx-auto px-6 py-20">
        <h1 className=" text-center mb-5 text-5xl uppercase text-blue-950 font-semibold">
          {brandName}
        </h1>
        <p className=" text-sm uppercase tracking-[10px] text-center">
          Enhance Your Natural Beauty with our Stunning Selection
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-28">
          {filteredata.length === 0 ? (
            <>
              <p className=" text-lg   text-center block col-span-4 font-medium text-gray-500">
                No products available
              </p>
              <Link to="/addproduct" className="col-span-4 block text-center">
                <button className="  btn py-3 bg-blue-950 hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950 text-white font-normal tracking-widest border-0 px-8 w-fit rounded-none">
                  Add new product
                </button>
              </Link>
            </>
          ) : (
            filteredata.map((data) => (
              <ShowProductDesign data={data} key={data._id}></ShowProductDesign>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
