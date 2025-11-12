"use client";
import { getProductById, menClothingData } from "@/components/data/data";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import Star from "@/components/ui/star";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { stringify } from "postcss";
import ProductCard from "@/components/ui/productCard";

const ProductPage = () => {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const id = Number(slug?.match(/\d+/)?.[0]);
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] = useState("");
  if (!product) {
    return (
      <div className="pt-[150px] container min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }
  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
  
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity: quantity,
    };
  
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingIndex = existingCart.findIndex(
      (item: { id: number; size: string }) => item.id === cartItem.id && item.size === cartItem.size
    );
  
    if (existingIndex >= 0) {
      existingCart[existingIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }
  
    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event('cartUpdated'));
    setSelectedSize("")
    setQuantity(1)
  };
  return (
    <div className="pt-[150px] container min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-6 flex-col-reverse md:flex-row">
          <div className="flex flex-row md:flex-col  gap-4 lg:w-[130px]">
            {product?.images?.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-[130px] h-[130px] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${
                  selectedImage === index
                    ? "border-black"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`${product?.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden h-[450px]">
            <img
              src={product?.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col  gap-3">
          <h2 className="font-black font-inter text-[24px] sm:text-[] lg:text-[40px]">
            {product?.name}
          </h2>
          <Star reviews={product?.reviews} stars={product?.rating} />
          <div>
            <div className="flex gap-[5px] md:gap-[10px] items-center">
              <div className="text-[20px] md:text-[24px] font-inter font-black">
                ${product?.price}
              </div>
              <div
                className={`text-[20px] md:text-[24px] font-inter font-bold text-gray-400 line-through ${
                  product?.originalPrice ? "block" : "hidden"
                }`}
              >
                ${product?.originalPrice}
              </div>
              <div
                className={`text-[10px] md:text-[12px] text-[#ff3333] bg-[#ff333334] px-[13px] py-[6px] rounded-full ${
                  product?.discount ? "block" : "hidden"
                }`}
              >
                {product?.discount}
              </div>
            </div>
          </div>
          <div>
            <p className="text-[14px] md:text-[16px] text-[#0000009d]">
              {product?.detail}
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <h4 className="text-[#0000008c] text-[14px] md:text-[16px]">
              Choose Size
            </h4>
            <div className="flex gap-2 md:gap-3">
              {product.sizes.map((size, index) => (
                <div key={index}>
                  <div
                    onClick={() => setSelectedSize(size)}
                    className={`text-[12px] md:text-[16px] px-[20px] py-[10px] md:px-[24px] md:py-[12px] bg-[#f0f0f0] hover:bg-[#000000d5] hover:text-white rounded-full hover:cursor-pointer transition-all duration-300 ease-in-out ${
                      selectedSize === size
                        ? "text-white bg-black"
                        : "text-gray-400"
                    }`}
                  >
                    {size}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 mt-4"></div>
            <div className="flex gap-x-[20px]">
              <div className="px-[20px] py-[14px] flex items-center bg-gray-200 rounded-full max-w-[110px] md:max-w-[170px] justify-between w-full ">
                <div onClick={() => handleQuantityChange(-1)} className="hover:cursor-pointer">
                  <FiMinus />
                </div>
                <input
                  type="number"
                  value={quantity}
                  min={1}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                  className="bg-gray-200 font-bold"
                  style={{
                    width: "40px",
                    textAlign: "center",
                    padding: "2px",
                  }}
                />
                <div onClick={() => handleQuantityChange(+1)} className="hover:cursor-pointer">
                  <FaPlus />
                </div>
              </div>
              <button
                className="text-white bg-black rounded-full max-w-[400px] w-full hover:bg-inherit hover:text-black hover:border-black hover:border transition-all duration-300 ease-in-out"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8"/>
      <div>
        <h3 className="uppercase font-inter font-black text-[32px] md:text-[48px] md:text-center">You might also like</h3>
        <div className="flex justify-center mt-8">
          <ProductCard productsData={menClothingData?.slice(0, 4)}/>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
