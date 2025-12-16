import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductCarousel, ProductDetailsComp } from "@/components";
import type { Product } from "@/types";
import {
  useGetProductByProductIdMutation,
  useGetRatingOfProductsMutation,
} from "@/services/queries";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>();

  const imagePrefix = "data:image/jpeg;base64,";

  const { mutateAsync: getProductByProductId } =
    useGetProductByProductIdMutation();

  const { mutateAsync: getRatingOfProducts } = useGetRatingOfProductsMutation();

  useEffect(() => {
    const handleProduct = async () => {
      try {
        const product = await getProductByProductId(productId || "");

        const rating = await getRatingOfProducts({
          productIds: [Number(productId)],
        });

        if (rating.data && rating.data.length > 0) {
          product.data["rating"] = Number(rating.data[0].averageRating);
          product.data["ratingsCount"] = Number(rating.data[0].ratingsCount);
        } else {
          product.data["rating"] = 0;
          product.data["ratingsCount"] = 0;
        }

        setProduct(product.data || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    handleProduct();
  }, [productId, getProductByProductId, getRatingOfProducts]);

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
