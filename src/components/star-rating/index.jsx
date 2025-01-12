import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStar }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseHover(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <>
      <div className="flex flex-row justify-center align-middle mt-20">
        {[...Array(noOfStar)].map((_, index) => {
          return (
            <FaStar
              key={index}
              className={
                index <= (hover || rating) ? "text-yellow-500" : "text-black"
              }
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseHover(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
}
