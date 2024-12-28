import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempCartData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempCartData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempCartData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14 px-10 sm:px-10">
      <div className="text-2xl mb-6 text-center">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      {cartData.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">Your cart is empty.</p>
          <img src={assets.noOrders} alt="Empty Cart" className="mx-auto mt-4" />
        </div>
      ) : (
        <div className="grid gap-6">
          {cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            if (!productData) return null;
            return (
              <div className="flex justify-between py-4 border-t border-b text-gray-700 sm:grid grid-cols-1 sm:grid-cols-[4fr_1fr_1fr] md:grid-cols-[4fr_2fr_1fr] items-center gap-2 sm:gap-4" key={index}>
                <div className="flex items-start gap-2 sm:gap-6">
                  <img src={productData.image[0]} className="w-[80px] aspect-square object-cover rounded-lg" alt={productData.name} />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-1 sm:gap-5 mt-2 text-sm">
                      <p className="font-semibold">
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border rounded-md">{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => (e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id, item.size, e.target.value))} className="border max-w-14 sm:max-w-20 p-1 sm:p-2 rounded-md" type="number" min={1} defaultValue={item.quantity} />
                <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.cross} className="w-6 cursor-pointer" alt="Remove" />
              </div>
            );
          })}
        </div>
      )}

      {cartData.length > 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button onClick={() => navigate("/place-order")} className="bg-black text-white text-sm my-8 px-8 py-3 rounded-md hover:bg-gray-800 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
