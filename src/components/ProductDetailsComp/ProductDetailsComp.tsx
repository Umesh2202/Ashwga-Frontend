import { StarRating } from "@/components/StarRating";

interface ProductDetailsCompProps {
  imageSrc: string | undefined;
  name: string | undefined;
  rating: number | undefined;
  reviews: number | undefined;
  price: number | undefined;
}

const ProductDetailsComp: React.FC<ProductDetailsCompProps> = ({
  imageSrc,
  name,
  rating = 0,
  reviews = 0,
  price,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 pt-20">
        <div className="flex justify-center items-center">
          <img src={imageSrc} alt="" />
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <span className="text-3xl max-w-8/10">{name}</span>
            <div className="flex gap-2">
              <span className="flex gap-3">
                <span className="text-xl justify-center items-center">
                  {rating}
                </span>
                <StarRating rating={rating} />
              </span>
              <span className="text-xl text-orange-700 font-semibold">
                ({reviews} ratings)
              </span>
            </div>
            <div className="flex">
              <span>₹</span>
              <span className="text-3xl">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsComp;
