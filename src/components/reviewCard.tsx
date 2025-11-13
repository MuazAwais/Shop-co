"use client";

import { FaCheckCircle } from "react-icons/fa";
import Star from "./ui/star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";



const ReviewCard = () => {
  const reviews = [
    {
      name: "Samantha D.",
      rating: 4.5,
      date: "August 14, 2023",
      review: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt!"`,
    },
    {
      name: "Alex M.",
      rating: 5.0,
      date: "August 15, 2023",
      review: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
    },
    {
      name: "Ethan R.",
      rating: 4.0,
      date: "August 16, 2023",
      review: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    },
    {
      name: "Olivia P.",
      rating: 5.0,
      date: "August 17, 2023",
      review: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    },
    {
      name: "Liam K.",
      rating: 5.0,
      date: "August 18, 2023",
      review: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    },
    {
      name: "Ava H.",
      rating: 4.5,
      date: "August 19, 2023",
      review: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
    },
  ];
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      autoplay={{ delay: 3000 }}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1 },   // mobile
        640: { slidesPerView: 2 },   // small tablets
        1024: { slidesPerView: 3 },  // laptops
        1280: { slidesPerView: 3 },  // desktops
      }}
      className=""
    >
      {reviews.map((review, index) => (
        <SwiperSlide
          key={index}
          className="max-w-[395px] md:max-w-[400px] w-full py-[24px] px-[24px] flex flex-col gap-[12px] border border-gray-300 rounded-2xl overflow-hidden"
        >
          <Star stars={review.rating} />
          <div className="flex items-center gap-2">
            <h4 className="text-[16px] md:text-[20px] font-black">
              {review?.name}
            </h4>
            <div className="text-green-600">
              <FaCheckCircle />
            </div>
          </div>
          <div className="w-full text-gray-400 text-[14px] md:text-[16px]">
            {review?.review}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCard;
