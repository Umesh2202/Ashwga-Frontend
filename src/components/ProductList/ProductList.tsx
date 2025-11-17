import { ShopCard } from "@/components/ShopCard";

const ProductList = () => {
  const userElements = [];

  for (let i = 0; i < 5; i++) {
    userElements.push(<ShopCard />);
  }

  return <ul className="grid grid-cols-3">{userElements}</ul>;
};

export default ProductList;
