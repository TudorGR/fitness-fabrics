import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/Newsletter";

function About() {
  return (
    <div className="p-10">
      <div className="text-2xl text-center">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about1} className="rounded-lg w-full md:w-[450px] h-[300px] object-cover" alt="About Us" />
        <div className="flex flex-col justify-center gap-6">
          <p>Welcome to FitnessFabrics, your ultimate destination for premium sportswear. We are committed to providing you with the best in activewear, focusing on quality, comfort, and performance.</p>
          <p>At FitnessFabrics, we believe that everyone deserves to feel confident and comfortable in their workout gear. That's why we offer a wide range of products that cater to all fitness levels and styles.</p>
          <b className="text-gray-500">Our Mission</b>
          <p>Our mission is to inspire and empower individuals to lead healthier, more active lives. We strive to provide high-quality sportswear that not only looks great but also performs exceptionally well.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">We are dedicated to providing the highest quality sportswear. Our products are made from premium materials and are designed to withstand the rigors of any workout.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">Shopping with us is easy and convenient. Our user-friendly website and fast shipping ensure that you get your gear quickly and hassle-free.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
          <b>Customer Support</b>
          <p className="text-gray-600">Our customer support team is here to help you with any questions or concerns. We are committed to providing excellent service and ensuring your satisfaction.</p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default About;
