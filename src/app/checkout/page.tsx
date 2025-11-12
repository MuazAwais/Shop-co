import React from "react";
import CheckoutView from "../views/checkout";

const page = () => {
  return (
    <div className="pt-[150px] container">
      <h2 className="uppercase font-inter font-black text-[32px] md:text-[48px]">
        Checkout Your Order
      </h2>
        <div>

          <CheckoutView />
        </div>
      
    </div>
  );
};

export default page;