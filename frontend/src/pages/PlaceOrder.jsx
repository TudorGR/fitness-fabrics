import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(backendUrl + "/api/order/place", orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "google":
          const responseGoogle = await axios.post(backendUrl + "/api/order/google", orderData, { headers: { token } });
          if (responseGoogle.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(responseGoogle.data.message);
          }
          break;

        case "paypal":
          const responsePaypal = await axios.post(backendUrl + "/api/order/paypal", orderData, { headers: { token } });
          if (responsePaypal.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(responsePaypal.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt14 min-h-[80vh] mx-10">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3 w-full">
          <Title text1={"Delivery"} text2={"Information"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required onChange={onChange} name="firstName" value={formData.firstName} type="text" placeholder="First Name" className="border border-gray-300 rounded py-1.5 px-3.5" />
            <input required onChange={onChange} name="lastName" value={formData.lastName} type="text" placeholder="Last Name" className="border border-gray-300 rounded py-1.5 px-3.5" />
          </div>
          <input required onChange={onChange} name="email" value={formData.email} type="email" placeholder="Email address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3" />
          <input required onChange={onChange} name="street" value={formData.street} type="text" placeholder="Street" className="border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <input required onChange={onChange} name="city" value={formData.city} type="text" placeholder="City" className="border border-gray-300 rounded py-1.5 px-3.5" />
            <input required onChange={onChange} name="state" value={formData.state} type="text" placeholder="State" className="border border-gray-300 rounded py-1.5 px-3.5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <input required onChange={onChange} name="zipcode" value={formData.zipcode} type="number" placeholder="Zip Code" className="border border-gray-300 rounded py-1.5 px-3.5" />
            <input required onChange={onChange} name="country" value={formData.country} type="text" placeholder="Country" className="border border-gray-300 rounded py-1.5 px-3.5" />
          </div>
          <input required onChange={onChange} name="phone" value={formData.phone} type="number" placeholder="Phone number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3" />
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
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "google" ? "bg-black" : ""}`}></p>
              <img src={assets.card} className="h-5 mx-4" alt="" />
              <p>Google Pay</p>
            </div>
            <div onClick={() => setMethod("paypal")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "paypal" ? "bg-black" : ""}`}></p>
              <img src={assets.card} className="h-5 mx-4" alt="" />
              <p>Paypal</p>
            </div>
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-black" : ""}`}></p>
              <img src={assets.cash} className="h-5 mx-4" alt="" />
              <p>Cash</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
