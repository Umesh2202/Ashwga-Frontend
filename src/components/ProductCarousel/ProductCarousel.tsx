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

export function ProductCarousel() {
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
