import type { DeleteOrderRequest, OrderItemRequest } from "@/types/Order";
import { deleteOrder, orderItem } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export const useOrderItemMutation = () => {
  return useMutation({
    mutationKey: ['orderItem'], 
    mutationFn: async (body: OrderItemRequest) => {
      const res = await orderItem(body);
      return res;
    },
  });
};

export const useDeleteOrderMutation = () => {
  return useMutation({
    mutationKey: ['deleteOrder'], 
    mutationFn: async (body: DeleteOrderRequest) => {
      const res = await deleteOrder(body);
      return res;
    },
  });
};