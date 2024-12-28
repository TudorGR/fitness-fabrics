import React from "react";
import { assets } from "../assets/assets";

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-lg xs:text-xs sm:text-sm md:text-base">
      <div>
        <img src={assets.exchange} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exhange policy</p>
      </div>
      <div>
        <img src={assets.returnIcon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">7 day return</p>
        <p className="text-gray-400">We offer hassle free exhange policy</p>
      </div>
      <div>
        <img src={assets.profile_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We offer hassle free exhange policy</p>
      </div>
    </div>
  );
}

export default OurPolicy;
