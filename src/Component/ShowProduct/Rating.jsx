import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  const remaining = 5 - rating;
  const stars = [];
  const remainingStart = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<AiFillStar key={i} className="text-xl" />);
  }
  for (let i = 0; i < remaining; i++) {
    remainingStart.push(<AiOutlineStar key={i} className="text-xl" />);
  }

  return (
    <div className="flex">
      {stars}
      {remainingStart}
    </div>
  );
};

export default Rating;
