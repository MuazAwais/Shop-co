"use client";
import Link from "next/link";
import ProductCard from "../../../components/ui/productCard";
import { menClothingData } from "../../../components/data/data";

const NewArrivals = () => {
  const products = menClothingData.slice(0,4)
  return (
    <div className="container flex-col flex gap-[32px] md:gap-[55px] items-center ">
      <h2 className="uppercase font-inter font-black text-[32px] md:text-[48px] text-center">
        New Arrivals
      </h2>
      <ProductCard productsData={products}/>
      <Link href="/shop" className="px-[80px] py-[15px] border border-gray-400 rounded-full sm:w-fit hover:bg-black hover:text-white">View All</Link>
    </div>
  );
};

export default NewArrivals;
