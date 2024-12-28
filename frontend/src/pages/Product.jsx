import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productId, products]);

  return productData ? (
    <div className="mx-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="py-4 px-10 font-medium">{`Collection ${productData.category ? "> " + productData.category : ""}`}</div>
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="w-full flex flex-1 sm:flex-col flex-row gap-4 sm:w-1/2 items-center">
          <div className="max-w-[500px] w-full">
            <img src={image} className="rounded-lg object-cover w-full h-auto" />
          </div>
          <div className="flex flex-col sm:flex-row overflow-x-auto sm:overflow-y-auto justify-center w-1/3 sm:w-full gap-2">
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} className="w-[80px] h-[80px] object-cover rounded-lg cursor-pointer" />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row-reverse  justify-between">
            <p className="font-thin text-sm text-gray-500 mr-10">{productId}</p>
            <h1 className="font-medium text-3xl mt-2">{productData.name}</h1>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star} alt="" className="w-3 5" />
            <img src={assets.star} alt="" className="w-3 5" />
            <img src={assets.star} alt="" className="w-3 5" />
            <img src={assets.star} alt="" className="w-3 5" />
            <img src={assets.star} alt="" className="w-3 5" />
            <p className="pl-2">31 reviews</p>
          </div>
          <div className="my-10 flex gap-4 items-center">
            <p className=" text-4xl font-medium">
              {currency}
              {productData.price}.00
            </p>
            <p className=" text-2xl line-through text-gray-400">
              {currency}
              {productData.price + 50}.00
            </p>
          </div>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`font-medium border border-gray-200 rounded-md p-3 ${item === size ? "bg-black text-white" : ""}`} key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className="rounded-lg font-medium bg-black text-white px-8 py-3 text-sm active:bg-gray-700 ">
            Add To Cart
          </button>
          <hr className="my-8 sm:w-4/5" />
          <div className="text-md text-gray-500 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy in 7 days</p>
          </div>
        </div>
      </div>
      <div className=" mt-20">
        <div className="flex">
          <b className="border border-white border-r-gray-300 px-5 py-3 text-sm">Description</b>
          <p className="px-5 py-3 text-sm">Reviews (31)</p>
        </div>
        <div className="flex flex-col gap-4 border border-white border-t-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>Our premium sportswear is designed to provide you with the ultimate comfort and performance. Made from high-quality materials, our products are built to withstand the rigors of any workout, ensuring you stay comfortable and stylish.</p>
          <p>Whether you're hitting the gym, going for a run, or practicing yoga, our sportswear is perfect for any activity. With a focus on quality, comfort, and performance, our products are designed to help you achieve your fitness goals.</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
