import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt14 min-h-[80vh]">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480]px">
        <div className="text-xl sm:text-2xl my-3 w-1/2">
          <Title text1={"Delivery"} text2={"Information"} />
          <div className="flex gap-3">
            <input type="text" placeholder="First Name" className="border border-gray-300 rounded py-1.5 px-3.5" />
            <input type="text" placeholder="Last Name" className="border border-gray-300 rounded py-1.5 px-3.5" />
          </div>
          <input type="email" placeholder="Email address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input type="text" placeholder="Street" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <div className="flex gap-3">
            <input type="text" placeholder="City" className="border border-gray-300 rounded py-1.5 px-3.5" />
            <input type="text" placeholder="State" className="border border-gray-300 rounded py-1.5 px-3.5" />
          </div>
          <div className="flex gap-3">
            <input type="number" placeholder="Zip Code" className="border border-gray-300 rounded py-1.5 px-3.5" />
            <input type="text" placeholder="Country" className="border border-gray-300 rounded py-1.5 px-3.5" />
          </div>
          <input type="number" placeholder="Phone number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        </div>
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"Payment"} text2={"Method"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod("google")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "google" ? "bg-blue-300" : ""}`}>google</p>
              <img src={assets.cart_icon} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={() => setMethod("paypal")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "paypal" ? "bg-blue-300" : ""}`}>Paypal</p>
              <img src={assets.cart_icon} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-blue-300" : ""}`}>Cash</p>
              <img src={assets.cart_icon} className="h-5 mx-4" alt="" />
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={() => navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
