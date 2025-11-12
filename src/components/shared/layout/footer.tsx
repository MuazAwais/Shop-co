import React from "react";
import Register from "../../../app/views/home/register";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#f0f0f0] mt-[200px]">
      <div className="container relative mx-auto pt-[140px]">
        <div className="max-w-[358px] md:max-w-[1240px] mx-auto absolute inset-x-0  -top-[180px] md:-top-[100px] w-full">
          <Register />
        </div>
        <div className="">
          <div className="flex gap-x-[100px] gap-y-[40px] flex-col lg:flex-row mx-auto">
            <div className="lg:max-w-[248px] flex flex-col gap-[10px] md:gap-[25px]">
              <h2 className="font-inter font-black text-[28px] md:text-[33.5px]">
                SHOP.CO
              </h2>
              <p className="text-[14px] text-gray-400">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex gap-3  mt-[10px]">
                <Link
                  href={"https://x.com/"}
                  className="text-black bg-white px-[9px] py-[9px] border border-gray-300 rounded-full hover:text-white hover:bg-black hover:border-black active:bg-gray-400"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href={"https://www.facebook.com"}
                  className="text-black bg-white px-[9px] py-[9px] border border-gray-300 rounded-full hover:text-white hover:bg-black hover:border-black active:bg-gray-400"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href={"https://www.instagram.com/"}
                  className="text-black bg-white px-[9px] py-[9px] border border-gray-300 rounded-full hover:text-white hover:bg-black hover:border-black active:bg-gray-400"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={"https://github.com/"}
                  className="text-black bg-white px-[9px] py-[9px] border border-gray-300 rounded-full hover:text-white hover:bg-black hover:border-black active:bg-gray-400"
                >
                  <IoLogoGithub />
                </Link>
              </div>
            </div>
            <div className="flex md:gap-[100px] gap-x-[50px] gap-y-[24px] flex-wrap justify-between w-full">
              <div className="flex flex-col gap-[16px] max-w-[149px] w-full">
                <h4 className="font-black text-[14px] md:text-[16px] uppercase tracking-widest">
                  Company
                </h4>
                <div className="flex flex-col gap-[8px] text-[14px] md:text-[16px] text-gray-400">
                  <Link href={"/contruction"} className="hover:text-black">About</Link>
                  <Link href={"/contruction"} className="hover:text-black">Features</Link>
                  <Link href={"/contruction"} className="hover:text-black">Works</Link>
                  <Link href={"/contruction"} className="hover:text-black">Career</Link>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] max-w-[149px] w-full">
                <h4 className="font-black text-[14px] md:text-[16px] uppercase tracking-widest">
                  HELP
                </h4>
                <div className="flex flex-col gap-[8px] text-[14px] md:text-[16px] text-gray-400">
                  <Link href={"/contruction"} className="hover:text-black">Customer Support</Link>
                  <Link href={"/contruction"} className="hover:text-black">Delivery Detail</Link>
                  <Link href={"/contruction"} className="hover:text-black">Terms & Conditions</Link>
                  <Link href={"/contruction"} className="hover:text-black">Privacy Policy</Link>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] max-w-[149px] w-full">
                <h4 className="font-black text-[14px] md:text-[16px] uppercase tracking-widest">
                  FAQ
                </h4>
                <div className="flex flex-col gap-[8px] text-[14px] md:text-[16px] text-gray-400">
                  <Link href={"/contruction"} className="hover:text-black">Account</Link>
                  <Link href={"/contruction"} className="hover:text-black">Manage Deliveries</Link>
                  <Link href={"/contruction"} className="hover:text-black">Orders</Link>
                  <Link href={"/contruction"} className="hover:text-black">Payments</Link>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] max-w-[149px] w-full">
                <h4 className="font-black text-[14px] md:text-[16px] uppercase tracking-widest">
                  Resources
                </h4>
                <div className="flex flex-col gap-[8px] text-[14px] md:text-[16px] text-gray-400">
                  <Link href={"/contruction"} className="hover:text-black">Free eBooks</Link>
                  <Link href={"/contruction"} className="hover:text-black">Development Tutorial</Link>
                  <Link href={"/contruction"} className="hover:text-black">How to-Blog</Link>
                  <Link href={"/contruction"} className="hover:text-black">Youtube Playlist</Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-gray-400 mt-[40px] md:mt-[50px] mb-[16px] md:mb-[20px] px-[17px]" />
          <div className="flex flex-col items-center md:justify-between md:flex-row gap-y-[16px] ">
            <div className="text-[#00000073]">
              Shop.co &copy; 2000-2025, All Rights Reserved
            </div>
            <div className="flex sm:gap-[10px] md:gap-[12px]">
              <img
                src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646654/Badge_ly29lk.png"
                alt="Visa"
              />
              <img
                src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646653/Badge1_yue7ef.png"
                alt="Master"
              />
              <img
                src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646653/Badge3_shwkkr.png"
                alt="Paypal"
              />
              <img
                src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646653/Badge4_u0zizm.png"
                alt="Apple pay"
              />
              <img
                src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646654/Badge5_ulminh.png"
                alt="Google pay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
