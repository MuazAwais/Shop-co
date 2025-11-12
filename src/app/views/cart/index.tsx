'use client'
import React, { useEffect, useMemo, useState } from 'react'
import ItemsCard from './itemsCard'
import { getCart } from '@/components/data/cartData';
import Link from 'next/link';

interface CartItem {
    id: string;
    size: string;
    quantity: number;
    image?: string;
    name?: string;
    price?: number | string;
}

const CartView = () => {
    const [itemsData, setItemsData] = useState<CartItem[] | undefined>(undefined);

    useEffect(() => {
        const updateData = () => {
            if (typeof window !== 'undefined') {
                setItemsData(getCart());
            }
        };

        updateData();

        if (typeof window !== 'undefined') {
            window.addEventListener('cartUpdated', updateData);
            return () => window.removeEventListener('cartUpdated', updateData);
        }
    }, []);

    const subtotal = useMemo(() => {
        if (!Array.isArray(itemsData)) return 0;
        return itemsData.reduce((sum: number, item: CartItem) => {
            const price = Number(item?.price) || 0;
            const qty = Number(item?.quantity) || 0;
            return sum + price * qty;
        }, 0);
    }, [itemsData]);

    const deliveryFee = useMemo(() => {
        return subtotal > 0 ? 15 : 0;
    }, [subtotal]);

    const total = useMemo(() => subtotal + deliveryFee, [subtotal, deliveryFee]);

  return (
    <div className='flex flex-col md:flex-row gap-[20px]'>
      <div className='max-w-[715px] w-full'>
        <ItemsCard cartData={itemsData}/>
      </div>
      <div className='w-full'>
      <div className="border-2 rounded-xl p-6 h-fit">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      <div className="space-y-3">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span className="font-inter font-black">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-700">
          <span>Delivery Fee</span>
          <span className="font-inter font-black">${deliveryFee.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between text-lg font-inter font-black">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>


      <Link href={'/checkout'}>
      <button
        className="mt-6 w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-white hover:text-black hover:border-black hover:border transition-all duration-300 ease-in-out"
        
      >
        Go to Checkout →
      </button>
        </Link>
    </div>
      </div>
    </div>
  )
}

export default CartView