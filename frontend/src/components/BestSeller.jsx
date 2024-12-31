import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { assets } from "../assets/assets";

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
      setLoading(false);
    }
  }, [products]);

  return (
    <div className="mx-10">
      <div className="text-center text-3xl py-20">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-full xs:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our best-selling products that our customers love. These items
          have been highly rated and are popular choices for their quality and
          style. Don't miss out on these top picks!
        </p>
      </div>
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {Array.from({ length: 5 }).map((item, index) => (
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
          {bestSeller.map((item, index) => (
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
}

export default BestSeller;
