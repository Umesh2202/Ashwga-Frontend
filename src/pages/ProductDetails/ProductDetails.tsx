import { ProductCarousel, ProductDetailsComp } from "@/components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "@/types";
import { useGetProductByProductIdMutation } from "@/services/queries";
import { useGetRatingOfProducts } from "@/services/queries/rating.query";
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>();

  const imagePrefix = "data:image/jpeg;base64,";

  const { mutateAsync: getProductByProductId } =
    useGetProductByProductIdMutation();

  const { mutateAsync: getRatingOfProducts } = useGetRatingOfProducts();

  useEffect(() => {
    const handleProduct = async () => {
      const product = await getProductByProductId(productId || "");

      const rating = await getRatingOfProducts({
        productIds: [Number(productId)],
      });

      product.data["rating"] = Number(rating.data[0].averageRating);
      setProduct(product.data || null);
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
          reviews={product?.reviews}
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
