import { ShopCard, AddProduct } from "@/components"; // Import Spinner
import { getRatingsData } from "@/helpers";
import {
  useGetAllProductsMutation,
  useGetRatingOfProductsMutation,
  useDeleteProductMutation,
} from "@/services/queries";
import type { Product } from "@/types";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { mutateAsync: getAllProducts } = useGetAllProductsMutation();
  const { mutateAsync: getRatingOfProducts } = useGetRatingOfProductsMutation();
  const { mutateAsync: deleteProduct } = useDeleteProductMutation();

  const imagePrefix = "data:image/jpeg;base64,";

  useEffect(() => {
    const initData = async () => {
      const currentProducts = await getAllProducts();
      const productData = currentProducts.data;
      const productIds = productData.map((product: Product) => product.id);
      const ratings = await getRatingOfProducts({ productIds });

      const mergedData = getRatingsData(productData, ratings.data);
      setProducts(mergedData);
    };

    initData();
  }, [getAllProducts, getRatingOfProducts]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        setProducts((prev) =>
          prev.filter((product) => product.id.toString() !== id)
        );
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

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
        onDelete={handleDelete}
      />
    );
  });

  return (
    <div>
      <ul className="grid grid-cols-4 gap-y-4">
        {userElements}
        <AddProduct />
      </ul>
      ;
    </div>
  );
};

export default ProductList;
