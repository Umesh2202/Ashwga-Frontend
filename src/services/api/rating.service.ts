import { MICROSERVICES } from "@/constants";
import type { GetRatingOfProductsRequest } from "@/types";
import axios from "axios";

export const getRatingOfProducts=async(payload: GetRatingOfProductsRequest)=>{
    const response = await axios.post(MICROSERVICES.RATING + "/products", payload);
    return response;
}