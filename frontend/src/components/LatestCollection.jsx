import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { assets } from "../assets/assets.js";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10));
      setLoading(false);
    }
  }, [products]);

  return (
    <div className=" mx-10">
      <div className="text-center py-20 text-3xl">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="w-full xs:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our latest collection of exclusive products. Each item is
          crafted with the utmost care and attention to detail, ensuring the
          highest quality and style. Explore our new arrivals and find the
          perfect addition to your wardrobe.
        </p>
      </div>
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {Array.from({ length: 10 }).map((item, index) => (
            <ProductItem
              key={index}
              id={`mock-${index}`}
              image={[assets.loadingContent]}
              name="Loading..."
              price={0}
              sizes={[]}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              sizes={item.sizes}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestCollection;
