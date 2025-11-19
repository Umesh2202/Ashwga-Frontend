import { ProductDetailsComp } from "@/components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Product {
  id: number;
  imageSrc: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
}

const products = [
  {
    id: 1,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Pigeon by Stovekraft Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. (Silver)",
    rating: 3.5,
    reviews: 1034,
    price: 599,
  },
  {
    id: 2,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Philips HD6975/00 25 Litre Digital Oven Toaster Grill, Grey, 25 liter",
    rating: 4.2,
    reviews: 250,
    price: 7299,
  },
  {
    id: 3,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Butterfly Jet Elite Mixer Grinder, 750W, 4 Jars (Grey)",
    rating: 3.8,
    reviews: 5400,
    price: 2800,
  },
  {
    id: 4,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Bajaj DX 15 1000-Watt Dry Iron (White)",
    rating: 4.5,
    reviews: 120,
    price: 549,
  },
  {
    id: 5,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)",
    rating: 2.9,
    reviews: 15,
    price: 3200,
  },
  {
    id: 6,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Samsung 23 L Solo Microwave Oven (MS23F301TAK/TL, Black)",
    rating: 4.7,
    reviews: 890,
    price: 5990,
  },
  {
    id: 7,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Kent 16044 Hand Blender 400 W (White)",
    rating: 3.0,
    reviews: 45,
    price: 1200,
  },
  {
    id: 8,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Morphy Richards Otto 20-Litre Oven Toaster Grill (Black)",
    rating: 4.0,
    reviews: 320,
    price: 4500,
  },
  {
    id: 9,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Havells Puro Plus 20-Litre Storage Water Heater (White)",
    rating: 3.6,
    reviews: 2100,
    price: 8999,
  },
  {
    id: 10,
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg",
    name: "Eureka Forbes Aquaguard Ritz RO+UV+MTDS+Alkaline Water Purifier",
    rating: 4.8,
    reviews: 560,
    price: 16500,
  },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    const handleProduct = () => {
      const product = products.find(
        (product) => product.id.toString() == productId
      );
      setProduct(product || null);
    };

    handleProduct();
  });

  console.log(product);
  return (
    <ProductDetailsComp
      imageSrc={product?.imageSrc}
      name={product?.name}
      rating={product?.rating}
      reviews={product?.reviews}
      price={product?.price}
    />
  );
};

export default ProductDetails;
