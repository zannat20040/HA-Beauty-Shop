import React from "react";
import "../Slider.css";
import "../Custom.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className=" min-h-screen relative">
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
          <SwiperSlide>
            <img
              src="https://i.ibb.co/gwWFXdj/31247348-various-makeup-products-on-dark-background.jpg"
              alt="slide1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/BfHYsPz/36977631-various-makeup-products-on-dark-background-with-copyspace.jpg"
              alt="slide2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/9nF24Hc/cosmetics-780x470.webp"
              alt="slide2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/S6fQMts/depositphotos-90577884-stock-photo-various-makeup-products-on-dark.jpg"
              alt="slide2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/4pNLmLs/ft.jpg" alt="slide2" />
          </SwiperSlide>
        </Swiper>

        <div className="hero-content text-center absolute top-0 bottom-0 my-0 px-14 z-20 left-0 right-0 mx-auto text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello Beauty...</h1>
            <p className="mb-5 text-base">
              Discover a world of skincare, cosmetics, and fragrances
              meticulously curated to enhance your natural allure. Pamper
              yourself with the finest selections, and let your beauty shine
              with every visit.
            </p>
            <Link to="/error">
              <button className=" bg-blue-950 text-white tracking-widest rounded-none border-0 btn font-normal">
                Know About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
