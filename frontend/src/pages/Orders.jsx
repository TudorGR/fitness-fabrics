import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = () => {
  const { currency, backendUrl, token } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const fetchOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(backendUrl + "/api/order/user-orders", {}, { headers: { token } });
      if (response.data.success) {
        let allOrders = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrders.push(item);
          });
        });
        setOrderData(allOrders.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, [token]);

  return (
    <div className="min-h-[60vh] border-t pt-16 px-4 sm:px-8 lg:px-16">
      <div className="text-2xl mb-8">
        <Title text1={"My"} text2={"Orders"} />
      </div>
      {orderData.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">You have no orders yet.</p>
          <img src={assets.noOrders} alt="No Orders" className="mx-auto mt-4 w-[100px] md:w-[150px] lg:w-[200px]" />
        </div>
      ) : (
        <div className="space-y-6">
          {orderData.map((item, index) => (
            <div key={index} className="py-4 border-b text-gray-700 flex flex-col sm:flex-row gap-4 justify-between bg-white p-4">
              <div className="flex items-start gap-6 text-sm">
                <img src={item.image[0]} className="w-16 sm:w-20 rounded-md" alt="" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2 text-base">
                    <p className="text-sm sm:text-base md:text-lg font-semibold">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-2">
                    Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                  </p>
                  <p className="mt-2">
                    Payment: <span className="text-gray-400">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 flex flex-col md:flex-row justify-around items-center">
                <button onClick={fetchOrderData} className="text-nowrap border px-4 py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-gray-700">
                  Refresh Status
                </button>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                  <p className="text-sm md:text-base">{item.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
