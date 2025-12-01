import { StarRating, Button, Counter } from "@/components";
import { useOrderItemMutation } from "@/services/queries";
import { useProductStore } from "@/store";

interface ProductDetailsCompProps {
  id: string | undefined;
  imageSrc: string | undefined;
  name: string | undefined;
  rating: number | undefined;
  ratingsCount: number | undefined;
  price: number | undefined;
  description: string | undefined;
}

const ProductDetailsComp: React.FC<ProductDetailsCompProps> = ({
  id,
  imageSrc,
  name,
  rating = 0,
  ratingsCount = 0,
  price,
  description,
}) => {
  const { count, increment } = useProductStore();

  const { mutateAsync: orderItem } = useOrderItemMutation();

  const handleOnClick = () => {
    orderItem({
      name,
      amount: 1,
      userId: 1,
      productId: id,
    });
    increment();
  };

  return (
    <>
      <div className="grid grid-cols-2 pt-20">
        <div className="flex justify-center items-center">
          <img src={imageSrc} alt="" className="max-w-1/2" />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex flex-col gap-5">
              <span className="text-4xl max-w-8/10">{name}</span>
              <span className="text-xl max-w-8/10">{description}</span>
              <div className="flex gap-2">
                <span className="flex gap-3">
                  <span className="text-xl justify-center items-center">
                    {rating.toFixed(1)}
                  </span>
                  <StarRating rating={rating} />
                </span>
                <span className="text-xl text-orange-700 font-semibold">
                  ({ratingsCount} ratings)
                </span>
              </div>
              <div className="flex">
                <span>₹</span>
                <span className="text-3xl">{price}</span>
              </div>
            </div>
          </div>
          <div>
            {count == 0 ? (
              <Button
                text="BUY"
                css="bg-yellow-500 w-1/2"
                fontSize=""
                onButtonClick={handleOnClick}
              />
            ) : (
              <Counter onButtonClick={handleOnClick} productId={Number(id)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsComp;
