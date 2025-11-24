import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../api/product.service";
import type { AddProductRequest } from "@/types";

export const useAddProductMutation = () => {
  return useMutation({
    mutationKey: ['addProduct'], 
    mutationFn: async (body: AddProductRequest) => {
      const res = await addProduct(body);
      return res;
    },
  });
};