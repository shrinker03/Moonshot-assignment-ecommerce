import React from "react";
import { AiFillStar } from "react-icons/ai";

const Rating = ({rate}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {[0, 1, 2, 3, 4].map((rating) => (
        <AiFillStar
          key={rating}
          className={classNames(
            rate > rating
              ? "text-gray-900"
              : "text-gray-200",
            "h-5 w-5 flex-shrink-0"
          )}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

export default Rating;
