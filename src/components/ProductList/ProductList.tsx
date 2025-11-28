import { ShopCard } from "@/components/ShopCard";
import { getRatingsData } from "@/helpers";
import {
  useGetAllProductsMutation,
  useGetRatingOfProductsMutation,
} from "@/services/queries";
import type { Product } from "@/types";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { mutateAsync: getAllProducts } = useGetAllProductsMutation();
  const { mutateAsync: getRatingOfProducts } = useGetRatingOfProductsMutation();

  const imagePrefix = "data:image/jpeg;base64,";

  useEffect(() => {
    const initData = async () => {
      try {
        const currentProducts = await getAllProducts();
        const productData = currentProducts.data;
        const productIds = productData.map((product: Product) => product.id);
        const ratings = await getRatingOfProducts({ productIds });

        const mergedData = getRatingsData(productData, ratings.data);
        setProducts(mergedData);
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
        ratingsCount={product.ratingsCount}
        price={product.price}
      />
    );
  });

  return <ul className="grid grid-cols-4 gap-y-4">{userElements}</ul>;
};

export default ProductList;
