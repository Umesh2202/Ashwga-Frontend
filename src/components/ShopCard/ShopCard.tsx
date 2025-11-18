import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface ShopCardProps {
  imageSrc: string;
  name: string;
  rating?: number; // 0-5
  reviews?: number;
  price: string | number;
}

const ShopCard: React.FC<ShopCardProps> = ({
  imageSrc,
  name,
  rating = 0,
  reviews = 0,
  price,
}) => {
  const filled = Math.round(Math.max(0, Math.min(5, rating)));
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < filled ? "★" : "☆"
  ).join("");

  return (
    <Card className="w-full max-w-sm h-152 rounded-none border-none shadow-none hover:shadow-xl aspect-3/4 py-1 gap-1">
      <img
        src={imageSrc}
        alt={name}
        className="w-full object-contain rounded-t-none h-92"
      />
      <div>
        <CardHeader className="pt-4">
          <CardTitle className="text-lg min-h-24 line-clamp-4">
            {name}
          </CardTitle>
          <CardDescription className="flex items-center gap-3 min-h-10">
            <span className="text-yellow-500">{stars}</span>
            <span className="text-sm text-muted-foreground">
              {rating.toFixed(1)} · {reviews} reviews
            </span>
          </CardDescription>
          <div className="font-semibold">
            <span>₹</span>
            <span className="text-lg mx-1">{price}</span>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
};

export default ShopCard;
