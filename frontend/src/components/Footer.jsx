import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero aliquid esse eaque, sapiente ea cupiditate accusamus veritatis, ipsam assumenda at quam exercitationem, deserunt sit asperiores doloribus expedita blanditiis dolorum cum.</p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>random@email.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
