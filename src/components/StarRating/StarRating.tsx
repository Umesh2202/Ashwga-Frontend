import { Star, StarHalf } from "lucide-react";

const StarRating = (props: { rating: number }) => {
  // 1. Create the array of 5 elements
  const stars = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1; // Make it 1-based for easier math

    // Condition for a Full Star
    if (props.rating >= index) {
      return (
        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
      );
    }

    // Condition for a Half Star (e.g., rating is 3.5, index is 4)
    if (props.rating >= index - 0.5) {
      return (
        <StarHalf key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
      );
    }

    // Condition for Empty Star
    return <Star key={i} className="w-4 h-4 text-gray-300" />;
  });

  return <div className="flex items-center gap-0.5">{stars}</div>;
};

export default StarRating;
