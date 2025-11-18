import { ShopCard } from "@/components/ShopCard";

const ProductList = () => {
  const userElements = [];

  for (let i = 0; i < 5; i++) {
    userElements.push(
      <ShopCard
        imageSrc="https://images-eu.ssl-images-amazon.com/images/I/71T2M3bz77L._AC_UL450_SR450,320_.jpg"
        name="Pigeon by Stovekraft Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. (Silver)"
        rating={3.5}
        reviews={1034}
        price={200}
      />
    );
  }

  return <ul className="grid grid-cols-4 gap-y-4">{userElements}</ul>;
};

export default ProductList;
