import { useMutation } from "@tanstack/react-query";
import { getRatingOfProducts, addRating, getRatingByUserIdAndProductId } from "@/services/api";
import type { AddRatingRequest, GetRatingByUserIdAndProductIdRequest, GetRatingOfProductsRequest } from "@/types";

export const useGetRatingOfProductsMutation=()=>{
    return useMutation({
        mutationKey: ['getRatingOfProducts'], 
        mutationFn: async (body: GetRatingOfProductsRequest) => {
        const res = await getRatingOfProducts(body);
        return res;
    },
  });
}

export const useAddRatingMutation = () => {
    return useMutation({
        mutationKey: ['addRating'],
        mutationFn: async (body: AddRatingRequest) => {
            const res = await addRating(body);
            return res;
        },
    });
};

export const useGetRatingByUserIdAndProductIdMutation = () => {
    return useMutation({
        mutationKey: ['getRatingByUserIdAndProductId'],
        mutationFn: async (body: GetRatingByUserIdAndProductIdRequest) => {
            const res = await getRatingByUserIdAndProductId(body.userId, body.productId);
            return res;
        },
    });
};