import axios from 'axios';
import { MICROSERVICES } from "@/constants"
import type { AddProductRequest } from '@/types';

export const addProduct = async (payload: AddProductRequest)=>{
    const response = await axios.post(MICROSERVICES.PRODUCT + "/add", payload);
    return response;
}