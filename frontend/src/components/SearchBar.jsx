import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch, navigate } = useContext(ShopContext);

  return (
    <div className={`transition-all duration-300 ease-in-out ${showSearch ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
      <div className="border-t border-b white text-center py-3">
        <div className="bg-neutral-100 inline-flex items-center justify-center  p-3 rounded-lg w-3/4 sm:w-2/4">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate("/collection");
              }
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="font-medium px-4 flex-1 outline-none bg-inherit text-md"
            type="text"
            placeholder="Search"
          />
          <img src={assets.search_icon} className="w-4" alt="" />
        </div>
        <img onClick={() => setShowSearch(false)} src={assets.cross} className="mx-4 inline w-3 cursor-pointer" alt="" />
      </div>
    </div>
  );
}

export default SearchBar;
