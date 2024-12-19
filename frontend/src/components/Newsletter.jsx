import React from "react";

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <form onSubmit={handleSubmit} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none" required />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;