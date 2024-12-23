import React from "react";
import Title from "../components/Title";
import Newsletter from "../components/Newsletter";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col justify-center gap-10 mb-28">
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl">Our Store</p>
          <p>*Address*</p>
          <p>tel:...</p>
          <p>email:...</p>
          <button className="border boder-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-200">Explore Jobs</button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
