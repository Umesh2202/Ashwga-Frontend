import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { StarRating } from "../StarRating";
import { useNavigate } from "react-router";
import { Trash2 } from "lucide-react";

interface ShopCardProps {
  id: string;
  imageSrc: string;
  name: string;
  rating?: number;
  ratingsCount?: number;
  price: string | number;
  onDelete?: (id: string) => void;
}

const ShopCard: React.FC<ShopCardProps> = ({
  id,
  imageSrc,
  name,
  rating = 0,
  ratingsCount = 0,
  price,
  onDelete,
}) => {
  const navigate = useNavigate();

  const goToProductDetails = () => {
    navigate(`/product/${id}`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <Card
      id={id}
      className="w-full max-w-100 h-152 rounded-none border-none shadow-none hover:shadow-lg aspect-3/4 py-1 gap-1 cursor-pointer relative group"
      onClick={goToProductDetails}
    >
      {onDelete && (
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleDelete}
            className="p-2 bg-white/80 rounded-full shadow hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors"
            title="Delete Product"
          >
            <Trash2 size={18} />
          </button>
        </div>
      )}
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
              {rating.toFixed(1)} · {ratingsCount} ratings
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
