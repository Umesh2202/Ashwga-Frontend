import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { StarRating } from "../StarRating";
import { useNavigate } from "react-router";

interface ShopCardProps {
  id: string;
  imageSrc: string;
  name: string;
  rating?: number;
  reviews?: number;
  price: string | number;
}

const ShopCard: React.FC<ShopCardProps> = ({
  id,
  imageSrc,
  name,
  rating = 0,
  reviews = 0,
  price,
}) => {
  const navigate = useNavigate();

  const goToProductDetails = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card
      id={id}
      className="w-full max-w-100 h-152 rounded-none border-none shadow-none hover:shadow-lg aspect-3/4 py-1 gap-1 cursor-pointer"
      onClick={goToProductDetails}
    >
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
            <span>
              <StarRating rating={rating} />
            </span>
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
