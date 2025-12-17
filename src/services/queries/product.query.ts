import { useMutation } from "@tanstack/react-query";
import { addProduct, deleteProduct, getAllProducts, getProductByProductId } from "../api/product.service";

export const useDeleteProductMutation = () => {
  return useMutation({
    mutationKey: ['deleteProduct'],
    mutationFn: async (productId: string) => {
      const res = await deleteProduct(productId);
      return res;
    },
  });
};

export const useAddProductMutation = () => {
  return useMutation({
    mutationKey: ['addProduct'], 
    mutationFn: async (body: FormData) => {
      const res = await addProduct(body);
      return res;
    },
  });
};

export const useGetAllProductsMutation = () => {
  return useMutation({
    mutationKey: ['getAllProducts'], 
    mutationFn: async () => {
      const res = await getAllProducts();
      return res;
    },
  });
};

export const useGetProductByProductIdMutation = () => {
  return useMutation({
    mutationKey: ['getAllProducts'], 
    mutationFn: async (productId: string) => {
      const res = await getProductByProductId(productId);
      return res;
    },
  });
};