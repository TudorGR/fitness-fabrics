import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("Relevant");
  const [price, setPrice] = useState([0, 1000]);

  const selectCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const selectSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      //not currently working
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  };

  const applyFilterPrice = () => {
    let productsCopy = products.slice();
    productsCopy = productsCopy.filter((item) => item.price > price[0] && item.price < price[1]);
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilterPrice();
  }, [price]);

  return (
    <div className="m-10 flex flex-col sm:flex-row gap-1 sm:gap-10">
      <div className="min-w-40 md:min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          Filters
          <img src={assets.arrow} className={`h-3 sm:hidden rotate-90 ${showFilter ? "rotate-[-90]" : ""}`} alt="" />
        </p>
        <div className="pr-0 p-4 pb-10 mb-10 border-b-gray-300 border border-white">
          <label className="block mb-2 text-sm font-medium text-gray-700">Price:</label>
          <div className="flex items-center gap-2">
            <p>min</p>
            <input type="range" min="0" max="1000" value={price[0]} onChange={(e) => setPrice([parseInt(e.target.value), price[1]])} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">${price[0]}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p>max</p>
            <input type="range" min="0" max="1000" value={price[1]} onChange={(e) => setPrice([price[0], parseInt(e.target.value)])} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">${price[1]}</span>
          </div>
        </div>
        <div className={`border border-white border-b-gray-300 pl-5 py-4 pb-10 my-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={selectCategory} type="checkbox" className="w-3" value={"Men"} />
              Men
            </p>
            <p className="flex gap-2">
              <input onChange={selectCategory} type="checkbox" className="w-3" value={"Women"} />
              Women
            </p>
            <p className="flex gap-2">
              <input onChange={selectCategory} type="checkbox" className="w-3" value={"Kids"} />
              Kids
            </p>
          </div>
        </div>
        <div className={` pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={selectSubCategory} type="checkbox" className="w-3" value={"Topwear"} />
              Shorts
            </p>
            <p className="flex gap-2">
              <input onChange={selectSubCategory} type="checkbox" className="w-3" value={"Bottomwear"} />
              T-Shirts & Tops
            </p>
            <p className="flex gap-2">
              <input onChange={selectSubCategory} type="checkbox" className="w-3" value={"Winterwear"} />
              Tank Tops
            </p>
            <p className="flex gap-2">
              <input onChange={selectSubCategory} type="checkbox" className="w-3" value={"Winterwear"} />
              Crop Tops
            </p>
            <p className="flex gap-2">
              <input onChange={selectSubCategory} type="checkbox" className="w-3" value={"Winterwear"} />
              Leggins
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 font-medium">
          <div className="flex items-center gap-2">
            <p onClick={() => navigate("/collection")} className="text-neutral-700 font-semibold text-sm md:text-base">
              All Collection
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-slate-300"></p>
          </div>
          <select onChange={(e) => setSortType(e.target.value)} className=" text-xs sm:text-sm bg-none">
            <option value="relevant">Relevant</option>
            <option value="low-high">Low to high</option>
            <option value="high-low">High to low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} sizes={item.sizes} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
