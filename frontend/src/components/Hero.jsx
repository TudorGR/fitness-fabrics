import React, { useContext } from "react";
import Slider from "react-slick";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const { navigate } = useContext(ShopContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row border border-b-gray-200 border-white overflow-hidden">
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-neutral-700">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-slate-300"></p>
              <p className="font-medium text-sm md:text-base">Our Bestseller</p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-6xl leading-relaxed fatface">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p
                onClick={() => navigate("/collection")}
                className="font-semibold text-sm md:text-base cursor-pointer"
              >
                Shop Now
              </p>
              <p className="w-8 md:w-11 h-[2px] bg-slate-300"></p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 overflow-hidden">
          <Slider {...settings2}>
            <img
              className="w-full object-cover h-64"
              src={assets.hero_img}
              alt="Hero Image 1"
            />
            <img
              className="w-full object-cover h-64"
              src={assets.hero_img2}
              alt="Hero Image 2"
            />
            <img
              className="w-full object-cover h-64"
              src={assets.hero_img3}
              alt="Hero Image 3"
            />
          </Slider>
        </div>
      </div>
      <div className="my-4 overflow-hidden">
        <Slider {...settings}>
          <div className="flex flex-1 items-center gap-4 justify-center">
            <div className="flex justify-center items-center gap-4">
              <img src={assets.checkmark} className="w-4" />
              <p className="text-xs sm:text-sm md:text-base">
                Ethically Made in Certified Factories
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-4 justify-center">
            <div className="flex justify-center items-center gap-4">
              <img src={assets.recycle} className="w-4" />
              <p className="text-xs sm:text-sm md:text-base">
                Made From Recycled Materials
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-4 justify-center">
            <div className="flex justify-center items-center gap-4">
              <img src={assets.checkmark} className="w-4" />
              <p className="text-xs sm:text-sm md:text-base">
                New Sustainable Collection
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
