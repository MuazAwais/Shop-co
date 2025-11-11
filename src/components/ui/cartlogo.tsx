'use client'

import { useEffect, useState } from "react";
import { getCartItemCount } from "../data/cartData";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

const CartLogo = () => {    
    const [itemsCount, setItemsCount] = useState(0);
    
    useEffect(() => {
        const updateCartCount = () => {
            if (typeof window !== 'undefined') {
                setItemsCount(getCartItemCount());
            }
        };

        // Initial load
        updateCartCount();

        const handleStorageChange = (e: StorageEvent) => {
            if ((e as StorageEvent).key === 'cart' || !e.key) {
                updateCartCount();
            }
        };
        window.addEventListener('storage', handleStorageChange);

        window.addEventListener('cartUpdated', updateCartCount);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('cartUpdated', updateCartCount);
        };
    }, []);
    
  return (
    <div>
      <div className="relative">
        <Link href={'/cart'} className="hover:cursor-pointer">
          <LuShoppingCart size={24} />
        </Link>
        <div className={`absolute -top-2 text-white bg-black px-[6px] -right-2 text-[12px] rounded-full font-bold ${itemsCount===0? "hidden": "block"}`}>{itemsCount}</div>
      </div>
    </div>
  );
};

export default CartLogo;
