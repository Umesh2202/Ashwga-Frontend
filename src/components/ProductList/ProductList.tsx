import { ShopCard } from "@/components/ShopCard";

const ProductList = () => {
  const userElements = [];

  for (let i = 0; i < 5; i++) {
    userElements.push(<ShopCard />);
  }

  return <ul>{userElements}</ul>;
};

export default ProductList;
