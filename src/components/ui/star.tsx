'use client';

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

type StarProps = {
  stars: number;
  reviews?: number;
};

const Star = ({ stars, reviews }: StarProps) => {
  const ratingStar = Array.from({ length: 5 }, (_elem, index) => {
    const number = index + 0.1;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-[#ffc633]" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-[#ffc633]" />
        ) : (
          <AiOutlineStar className="text-[#ffc633]" />
        )}
      </span>
    );
  });

  return (
    <div>
      <div className="flex items-center gap-1">
        {ratingStar}
        <p
          className={`text-[14px] ml-1 font-bold ${
            reviews ? "block" : "hidden"
          }`}
        >
          {stars}
          {" / "}
          <span className="font-medium text-gray-500">{reviews}</span>
        </p>
      </div>
    </div>
  );
};

export default Star;
