import { ShopCard } from "@/components/ShopCard";
import { useGetAllProductsMutation } from "@/services/queries";
import { useGetRatingOfProducts } from "@/services/queries/rating.query";
import type { Product } from "@/types";
import { useEffect, useState } from "react";

interface RatingItem {
  productId: number;
  averageRating: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { mutateAsync: getAllProducts } = useGetAllProductsMutation();
  const { mutateAsync: getRatingOfProducts } = useGetRatingOfProducts();

  const imagePrefix = "data:image/jpeg;base64,";

  useEffect(() => {
    const initData = async () => {
      try {
        const currentProducts = await getAllProducts();
        const productData = currentProducts.data;

        if (productData && productData.length > 0) {
          const productIds = productData.map((product: Product) => product.id);
          const ratings = await getRatingOfProducts({ productIds });

          const ratingMap = (ratings.data as RatingItem[]).reduce<
            Record<number, number>
          >((acc, current) => {
            acc[current.productId] = current.averageRating;
            return acc;
          }, {});

          const mergedData = productData.map((product: Product) => ({
            ...product,
            rating: Number(ratingMap[product.id]),
          }));
          setProducts(mergedData);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    initData();
  }, [getAllProducts, getRatingOfProducts]);

  const userElements = products.map((product) => {
    return (
      <ShopCard
        key={product.id.toString()}
        id={product.id.toString()}
        imageSrc={imagePrefix + product.imageData}
        name={product.name}
        rating={product.rating}
        reviews={product.reviews}
        price={product.price}
      />
    );
  });

  return <ul className="grid grid-cols-4 gap-y-4">{userElements}</ul>;
};

export default ProductList;
