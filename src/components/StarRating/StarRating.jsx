import { useState } from "react";
import { FaStar } from "react-icons/fa";

 function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex space-x-1" role="radiogroup" aria-label="Star rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={`cursor-pointer ${
              index <= (hover || rating) ? "text-yellow-400" : "text-black"
            }`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
