interface ProductDetailsCompProps {
  product: {
    imageSrc: string;
    name: string;
    rating: number;
    review: number;
    price: number;
  };
}

const ProductDetailsComp: React.FC<ProductDetailsCompProps> = ({ product }) => {
  return (
    <>
      <img src={product.imageSrc} alt="" />
      <span>{product.name}</span>
      <span>{product.rating}</span>
      <span>{product.review}</span>
      <span>{product.price}</span>
    </>
  );
};

export default ProductDetailsComp;
