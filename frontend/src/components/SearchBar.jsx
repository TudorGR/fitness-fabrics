import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center py-3">
      <div className="inline-flex items-center justify-center border p-3 border-gray-400 rounded-full w-3/4">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search" />
        <img src={assets.cart_icon} className="w-4" alt="" />
      </div>
      <img onClick={() => setShowSearch(false)} src={assets.cart_icon} className="inline w-3 cursor-pointer" alt="" />
    </div>
  ) : null;
}

export default SearchBar;