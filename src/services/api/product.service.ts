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