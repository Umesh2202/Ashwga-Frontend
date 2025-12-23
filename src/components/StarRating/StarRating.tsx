import { Star, StarHalf } from "lucide-react";
import { useState } from "react";

interface StarRatingProps {
  rating: number;
  onRate?: (rating: number) => void;
}

const StarRating = ({ rating, onRate }: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;
  const isInteractive = !!onRate;

  // 1. Create the array of 5 elements
  const stars = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1; // Make it 1-based for easier math

    const isFull = displayRating >= index;
    const isHalf = !isFull && displayRating >= index - 0.5;
    const isEmpty = !isFull && !isHalf;

    const Wrapper = isInteractive ? "button" : "span";

    return (
      <Wrapper
        key={i}
        className={`focus:outline-none ${
          isInteractive
            ? "cursor-pointer transition-transform hover:scale-110"
            : ""
        }`}
        onMouseEnter={() => isInteractive && setHoverRating(index)}
        onMouseLeave={() => isInteractive && setHoverRating(0)}
        onClick={() => isInteractive && onRate?.(index)}
        type={isInteractive ? "button" : undefined}
      >
        {isFull && <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />}
        {isHalf && (
          <StarHalf className="w-5 h-5 fill-yellow-500 text-yellow-500" />
        )}
        {isEmpty && (
          <Star
            className={`w-5 h-5 ${
              hoverRating >= index ? "text-yellow-200" : "text-gray-300"
            }`}
          />
        )}
      </Wrapper>
    );
  });

  return (
    <div
      className="flex items-center gap-1"
      onMouseLeave={() => isInteractive && setHoverRating(0)}
    >
      {stars}
    </div>
  );
};

export default StarRating;
