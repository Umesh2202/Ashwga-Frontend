import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShopCard } from "@/components/ShopCard";
import type { Product } from "@/types";
import { useGetAllProductsMutation } from "@/services/queries";
import { useEffect, useState } from "react";
import { useGetRatingOfProducts } from "@/services/queries/rating.query";

interface RatingItem {
  productId: number;
  averageRating: number;
}

export function ProductCarousel() {
  const [products, setProducts] = useState<Product[] | []>([]);

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

  return (
    <Carousel className="w-full max-w-9/10">
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="">
              <ShopCard
                key={product.id.toString()}
                id={product.id.toString()}
                imageSrc={imagePrefix + product.imageData}
                name={product.name}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProductCarousel;
