import React from "react";
import Title from "../components/Title";
import Newsletter from "../components/Newsletter";

const Contact = () => {
  return (
    <div className="p-10">
      <div className="text-center text-2xl pt-10">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
        <div className="flex flex-col justify-center items-start gap-6 md:w-1/2">
          <p className="font-semibold text-3xl">Our Store</p>
          <p className="font-medium text-2xl text-gray-500">123 Fitness St.</p>
          <p className="font-medium text-2xl text-gray-500">Suite 100</p>
          <p className="font-medium text-2xl text-gray-500">New York, NY 10001</p>
          <p className="font-medium text-2xl text-gray-500">tel: +1-555-123-4567</p>
          <p className="font-medium text-2xl text-gray-500">email: info@fitnessfabrics.com</p>
          <button className="rounded-lg border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-200">Explore Jobs</button>
        </div>
        <div className="flex flex-col justify-center items-start gap-6 md:w-1/2">
          <p className="font-semibold text-xl">Get In Touch</p>
          <form className="flex flex-col gap-4 w-full">
            <input type="text" placeholder="Your Name" className="border border-gray-300 p-3 rounded-md" required />
            <input type="email" placeholder="Your Email" className="border border-gray-300 p-3 rounded-md" required />
            <textarea placeholder="Your Message" className="border border-gray-300 p-3 rounded-md h-32" required></textarea>
            <button type="submit" className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-200 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
