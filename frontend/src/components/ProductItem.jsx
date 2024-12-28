import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, sizes }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-black cursor-pointer" to={`/product/${id}`}>
      <div className="relative rounded-md overflow-hidden group">
        <img className="max-h-[200px] aspect-square object-cover w-full" src={image[0]} alt="" />
        <div className="flex justify-start gap-2 text-white w-full absolute right-0 bottom-0 blurry p-2 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {Array.isArray(sizes) &&
            sizes.map((item, index) => (
              <p key={index} className="text-xs">
                {item}
              </p>
            ))}
        </div>
      </div>
      <div className="py-4 flex items-center justify-between">
        <p className="pb-1 text-sm">{name}</p>
        <p className="text-sm font-bold">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
