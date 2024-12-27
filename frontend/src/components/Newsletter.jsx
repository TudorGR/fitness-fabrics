import React from "react";

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get <span className="bg-gray-200">20%</span> off
      </p>
      <p className="text-gray-400 mt-3">By subscribing you also get exclusive promos! Don't miss out! </p>
      <form onSubmit={handleSubmit} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none" required />
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input onChange={() => {}} type="radio" name="gender" checked value="men" />
            <span>Men</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="gender" value="women" />
            <span>Women</span>
          </label>
        </div>
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
