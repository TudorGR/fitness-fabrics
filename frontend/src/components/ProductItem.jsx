import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="rounded-md overflow-hidden">
        <img className="max-h-[200px] aspect-square object-cover w-full" src={image[0]} alt="" />
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
