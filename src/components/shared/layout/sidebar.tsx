'use client';

import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
    
      const closerNavbar = () => {
        setIsOpen(false);
      };
  return (
    <div>
        <div className="" onClick={toggleNavbar}>
        <IoMenu size={32}/></div>
        <div className={`fixed top-[40px] left-[-500px] w-3/4 h-lvh rounded-lg bg-[#f0f0f0] ease-in-out duration-300 transition-transform flex-1 ${
            isOpen ? "translate-x-[500px]" : "-translate-x-[80px]"
          } z-60`}>
            <div onClick={closerNavbar}className="flex justify-end p-2 border-b " ><IoMdClose size={24}/></div>
            <ul>
                <li className="py-3 border-b text-[14px] font-semibold px-3" onClick={closerNavbar}><Link href={"/"}>Home</Link></li>
                <li className="py-3 border-b text-[14px] font-semibold px-3" onClick={closerNavbar}><Link href={"/shop"}>On Sale</Link></li>
                <li className="py-3 border-b text-[14px] font-semibold px-3" onClick={closerNavbar}><Link href={"/construction"}>New Arrivals</Link></li>
                <li className="py-3 text-[14px] font-semibold px-3" onClick={closerNavbar}><Link href={"/construction"}>Brands</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar