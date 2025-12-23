import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductCarousel, ProductDetailsComp, StarRating } from "@/components";
import type { Product } from "@/types";
import {
  useAddRatingMutation,
  useGetProductByProductIdMutation,
  useGetRatingByUserIdAndProductIdMutation,
  useGetRatingOfProductsMutation,
} from "@/services/queries";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>();
  const [userRating, setUserRating] = useState(0);

  const imagePrefix = "data:image/jpeg;base64,";

  const { mutateAsync: addRating } = useAddRatingMutation();

  const { mutateAsync: getProductByProductId } =
    useGetProductByProductIdMutation();

  const { mutateAsync: getRatingOfProducts } = useGetRatingOfProductsMutation();
  const { mutateAsync: getRatingByUserIdAndProductId } =
    useGetRatingByUserIdAndProductIdMutation();

  // Use direct API calls to avoid dependency loops with useMutation hooks
  const handleProduct = useCallback(async () => {
    try {
      const productData = await getProductByProductId(productId || "");

      const rating = await getRatingOfProducts({
        productIds: [Number(productId)],
      });

      if (rating.data && rating.data.length > 0) {
        productData.data["rating"] = Number(rating.data[0].averageRating);
        productData.data["ratingsCount"] = Number(rating.data[0].ratingsCount);
      } else {
        productData.data["rating"] = 0;
        productData.data["ratingsCount"] = 0;
      }

      setProduct(productData.data || null);

      const ratingByUserIdAndProductId = await getRatingByUserIdAndProductId({
        userId: 1,
        productId: Number(productId),
      });

      if (ratingByUserIdAndProductId.data) {
        setUserRating(Number(ratingByUserIdAndProductId.data.rating));
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }, [
    productId,
    getProductByProductId,
    getRatingOfProducts,
    getRatingByUserIdAndProductId,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      await handleProduct();
    };
    fetchData();
  }, [handleProduct]);

  const handleRate = async (rating: number) => {
    if (!productId) return;
    try {
      await addRating({ userId: 1, productId: Number(productId), rating });
      setUserRating(rating);
      toast.success("Thank you for your rating!");
      handleProduct();
    } catch (error) {
      console.error("Error submitting rating", error);
      toast.error("Failed to submit rating.");
    }
  };

  return (
    <>
      <div className="mb-6">
        <ProductDetailsComp
          id={productId}
          imageSrc={imagePrefix + product?.imageData}
          name={product?.name}
          description={product?.description}
          rating={product?.rating}
          ratingsCount={product?.ratingsCount}
          price={product?.price}
        />

        <div className="mt-8 flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold">Rate this product</h3>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 mb-1">Click to rate</span>
            <StarRating rating={userRating} onRate={handleRate} />
            {userRating > 0 && (
              <span className="text-sm text-green-600 font-medium">
                You rated: {userRating} stars
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 w-full"></div>

      <div>
        <div className="flex justify-center mt-6 text-2xl font-bold">
          <span>Other Products</span>
        </div>
        <div className="flex justify-center">
          <ProductCarousel />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
