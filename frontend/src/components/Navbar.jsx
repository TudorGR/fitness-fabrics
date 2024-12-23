import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between px-10">
      <Link to="/">
        <img src={assets.logo} className="w-24" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/collection">
          <p>Collection</p>
        </NavLink>
        <NavLink to="/about">
          <p>About</p>
        </NavLink>
        <NavLink to="/contact">
          <p>Contact</p>
        </NavLink>
      </ul>
      <div className="flex flex-row gap-6">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-6 cursor-pointer" alt="" />
        <div className="group relative">
          <img className="w-6 cursor-pointer" src={assets.profile_icon} alt="" />
          <div className="hidden group-hover:block absolute right-0">
            <div className="bg-slate-100 py-3 px-5 rounded">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-6" alt="" />
          <p className="absolute bottom-[-5px] right-[-5px] w-4 bg-black text-white aspect-square rounded-full leading-4 text-[10px] text-center">{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-6 cursor-pointer sm:hidden" alt="" />
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-slate-100 transition-all ${visible ? "w-full sm:hidden" : "w-0 sm:hidden"}`}>
        <div className="flex flex-col">
          <div onClick={() => setVisible(false)} className="flex items-center gap-5 p-3">
            <img src={assets.menu_icon} className="w-6 cursor-pointer" alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            <p>Home</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">
            <p>Collection</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
            <p>About</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
            <p>Contact</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
