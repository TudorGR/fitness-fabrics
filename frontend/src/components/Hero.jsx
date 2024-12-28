import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row border border-b-gray-200 border-white">
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-neutral-700">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-slate-300"></p>
              <p className="font-medium text-sm md:text-base">Our Bestseller</p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-6xl leading-relaxed fatface">Latest Arrivals</h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">Shop Now</p>
              <p className="w-8 md:w-11 h-[2px] bg-slate-300"></p>
            </div>
          </div>
        </div>
        <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
      </div>
      <div className="flex justify-around my-4">
        <div className="flex flex-1 items-center gap-4 justify-center">
          <img src={assets.checkmark} className="w-4" />
          <p className="text-xs sm:text-sm md:text-base">Ethically Made in Certified Factories</p>
        </div>
        <div className="w-[1px] border border-white border-r-gray-200"></div>
        <div className="flex-1 flex items-center gap-4 justify-center">
          <img src={assets.recycle} className="w-4" />
          <p className="text-xs sm:text-sm md:text-base">Made From Recycled Materials</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
