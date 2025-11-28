import { ShopCard } from "@/components/ShopCard";
import { useGetAllProductsMutation } from "@/services/queries";
import type { Product } from "@/types";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<Product[] | []>([]);

  const { mutateAsync: getAllProducts } = useGetAllProductsMutation();

  const imagePrefix = "data:image/jpeg;base64,";

  useEffect(() => {
    const getCurrentProducts = async () => {
      const currentProducts = await getAllProducts();
      console.log(currentProducts.data);
      setProducts(currentProducts.data);
    };

    getCurrentProducts();
  }, [getAllProducts]);

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
