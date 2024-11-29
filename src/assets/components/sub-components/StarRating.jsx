import { useState } from "react";

const StarRating = ({ initialRating = 0, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(initialRating);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMouseEnter = (rating) => {
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (rating) => {
    setSelectedRating(rating);
    onRatingChange(rating);
    setIsSubmitted(true); // Notify parent component about the change
  };

  return (
    <div className="flex flex-col justify-center mt-4 mb-auto">
      <div>
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={`cursor-pointer text-3xl ${
              rating <= (hoveredRating || selectedRating)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            onMouseEnter={() => handleMouseEnter(rating)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(rating)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500 ">
        {isSubmitted
          ? "Your rating has been submitted"
          : hoveredRating
          ? `${hoveredRating} star${hoveredRating > 1 ? "s" : ""}`
          : "Rate this service"}
      </p>
    </div>
  );
};

export default StarRating;
