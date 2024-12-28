import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[20%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%]">
        <NavLink className="flex items-center gap-3 border border-r-transparent border-gray-300 px-3 py-2 rounded-l" to="/add">
          <img className="w-5 h-5" src={assets.add} alt="" />
          <p className="hidden md:block md:text-sm lg:text-base">Add Items</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-transparent px-3 py-2 rounded-l" to="/list">
          <img className="w-5 h-5" src={assets.list} alt="" />
          <p className="hidden md:block md:text-sm lg:text-base">List Items</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-transparent px-3 py-2 rounded-l" to="/orders">
          <img className="w-5 h-5" src={assets.orders} alt="" />
          <p className="hidden md:block md:text-sm lg:text-base">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
