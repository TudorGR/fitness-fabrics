import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, getCartCount, setToken, navigate, token, setCartItems } = useContext(ShopContext);

  useEffect(() => {
    if (visible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [visible]);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div>
      <div className="h-[40px] bg-black flex justify-between items-center">
        <div className="flex gap-6 ml-4">
          <img src={assets.instagram} className="w-3 cursor-pointer" />
          <img src={assets.linkedin} className="w-3 cursor-pointer" />
          <img src={assets.facebook} className="w-3 cursor-pointer" />
          <img src={assets.X} className="w-3 cursor-pointer" />
        </div>
        <p className="hidden sm:block text-gray-200 text-xs">Free pre-paid return for any orders within 30 days.</p>

        <Link to="/cart" className=" bg-white py-1 px-4 flex items-center gap-2 rounded-full mr-4">
          <img draggable="false" src={assets.cart_icon} className="w-4" alt="" />
          <p className="text-xs text-center">{getCartCount()} Items in cart</p>
        </Link>
      </div>
      <div className="flex items-center justify-between sm:px-4 px-3 md:px-10 h-[60px] border border-white border-b-gray-200 ">
        <ul className="activeUnderline hidden sm:flex gap-2 md:gap-5">
          <NavLink to="/">
            <p className="text-sm md:text-base py-1 font-medium text-gray-600 hover:text-black transition ease-in-out delay-150">Home</p>
          </NavLink>
          <NavLink to="/collection">
            <p className="text-sm md:text-base py-1 font-medium text-gray-600 hover:text-black transition ease-in-out delay-150">Collection</p>
          </NavLink>
          <NavLink to="/about">
            <p className="text-sm md:text-base py-1 font-medium text-gray-600 hover:text-black transition ease-in-out delay-150">About</p>
          </NavLink>
          <NavLink to="/contact">
            <p className="text-sm md:text-base py-1 font-medium text-gray-600 hover:text-black transition ease-in-out delay-150">Contact</p>
          </NavLink>
        </ul>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img draggable="false" src={assets.logo} className="transform sm:translate-x-[50px] md:translate-x-[100px] lg:translate-x-[0px] h-[58px]" alt="" />
          </Link>
        </div>
        <div className="flex w-full justify-between sm:justify-end flex-row gap-3 md:gap-6 flex-row-reverse sm:flex-row">
          <div className="flex gap-3 sm:gap-4">
            <img draggable="false" onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} className="w-6 cursor-pointer" alt="" />

            <div className="group relative">
              <img draggable="false" className="w-6 cursor-pointer" src={assets.profile_icon} alt="" />

              {token ? (
                <div className="z-10 rounded-md boxShadow w-[200px] hidden group-hover:block absolute right-0">
                  <div className="bg-white flex flex-col items-start rounded">
                    <p className="hover:font-bold p-4">Profile</p>
                    <p className="hover:font-bold px-4 cursor-pointer" onClick={() => navigate("/orders")}>
                      Orders
                    </p>
                    <hr className="border-b-black w-full mt-4" />
                    <button className="rounded-md  w-[90%] py-3 font-medium" onClick={logout}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="z-10 rounded-md boxShadow w-[300px] sm:w-[400px] hidden group-hover:block absolute  right-0">
                  <div className="bg-white flex flex-col items-center rounded">
                    <p className="text-base md:text-lg font-bold py-4">You are not logged in</p>
                    <button className="rounded-md bg-black text-white w-[90%] py-3 font-medium" onClick={() => navigate("/login")}>
                      Login
                    </button>
                    <hr className="border-b-black w-full mt-4" />
                    <div className="flex gap-2 sm:gap-6">
                      <div className="flex items-center gap-2">
                        <img src={assets.offer} className="w-8" />
                        <p className="text-sm sm:text-base font-semibold py-4">Exclusive Offers</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={assets.track_order} className="w-8" />
                        <p className="text-sm sm:text-base font-semibold py-4">Track Orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <img draggable="false" onClick={() => setVisible(true)} src={assets.menu_icon} className="w-6 cursor-pointer sm:hidden" alt="" />
        </div>
        <div className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all ${visible ? "w-full sm:hidden" : "w-0 sm:hidden"}`}>
          <div className="flex flex-col h-full">
            <div onClick={() => setVisible(false)} className="flex items-center gap-5 p-3">
              <img draggable="false" src={assets.arrow} className="transform rotate-180 w-6 cursor-pointer" alt="" />
              <p>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b" to="/">
              <p className="text-lg font-medium">Home</p>
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b" to="/collection">
              <p className="text-lg font-medium">Collection</p>
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b" to="/about">
              <p className="text-lg font-medium">About</p>
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b" to="/contact">
              <p className="text-lg font-medium">Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
