import { MICROSERVICES } from "@/constants";
import type { GetRatingOfProductsRequest } from "@/types";
import axios from "axios";

export const getRatingOfProducts=async(payload: GetRatingOfProductsRequest)=>{
    const response = await axios.post(MICROSERVICES.RATING + "/products", payload);
    return response;
}

export const addRating = async (payload: { productId: number; rating: number }) => {
  const response = await axios.post(MICROSERVICES.RATING + "/add", payload);
  return response;
};

export const getRatingByUserIdAndProductId = async (userId: number, productId: number) => {
  const response = await axios.get(MICROSERVICES.RATING + `/${userId}/${productId}`);
  return response;
};