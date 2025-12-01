import axios from 'axios';
import { MICROSERVICES } from "@/constants"

export const addProduct = async (payload: FormData)=>{
    const response = await axios.post(MICROSERVICES.PRODUCT + "/add", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    return response;
}

export const getAllProducts = async ()=>{
    const response = await axios.get(MICROSERVICES.PRODUCT + "/all");
    return response;
  }
  
export const getProductByProductId = async (productId : string)=>{
  const response = await axios.get(MICROSERVICES.PRODUCT + `/${productId}`);
  return response;
}