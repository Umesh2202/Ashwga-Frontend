export interface Product {
  id: number;
  imageData: string;
  name: string;
  rating: number;
  ratingsCount: number;
  price: number;
  description?:string;
}

export interface AddProductRequest{
  imageSrc: File | null;
  name: string;
  price: number;
  amountAvailable: number;
  description: string;
}