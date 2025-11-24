export interface Product {
  id: number;
  imageSrc: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
}

export interface AddProductRequest{
  imageSrc: File | null;
  name: string;
  price: number;
  amountAvailable: number;
  description: string;
}