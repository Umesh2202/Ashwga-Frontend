import axios from 'axios';
import { MICROSERVICES } from "@/constants"
import type { DeleteOrderRequest, OrderItemRequest } from '@/types/Order';

export const orderItem = async (payload: OrderItemRequest)=>{
    const response = await axios.post(MICROSERVICES.ORDER + "/add", payload);
    return response;
}

export const deleteOrder = async (body: DeleteOrderRequest)=>{
    const response = await axios.post(MICROSERVICES.ORDER + `/${body.userId}/${body.productId}`);
    return response;
}