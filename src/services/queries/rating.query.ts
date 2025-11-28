import { useMutation } from "@tanstack/react-query";
import { getRatingOfProducts } from "@/services/api";
import type { GetRatingOfProductsRequest } from "@/types";

export const useGetRatingOfProducts=()=>{
    return useMutation({
        mutationKey: ['getRatingOfProducts'], 
        mutationFn: async (body: GetRatingOfProductsRequest) => {
        const res = await getRatingOfProducts(body);
        return res;
    },
  });
}