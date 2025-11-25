import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../api/product.service";

export const useAddProductMutation = () => {
  return useMutation({
    mutationKey: ['addProduct'], 
    mutationFn: async (body: FormData) => {
      const res = await addProduct(body);
      return res;
    },
  });
};