import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="p-10 border border-white border-t-gray-200 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-20 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 ">Welcome to FitnessFabrics, your ultimate destination for premium sportswear. We are committed to providing you with the best in activewear, focusing on quality, comfort, and performance.</p>
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
            <li>+1-555-123-4567</li>
            <li>info@ecom-store.com</li>
            <li>123 E-commerce St.</li>
            <li>Suite 100</li>
            <li>New York, NY 10001</li>
          </ul>
        </div>
      </div>
      <div className="text-xs font-medium text-neutral-500 bg-neutral-200 h-[40px] flex items-center justify-center">&copy; {new Date().getFullYear()} FitnessFabrics. All rights reserved.</div>
    </div>
  );
}

export default Footer;
