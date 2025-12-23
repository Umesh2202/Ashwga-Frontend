export interface GetRatingOfProductsRequest{
    productIds: number[];
}

export interface AddRatingRequest{
    userId: number;
    productId: number;
    rating: number;
}

export interface GetRatingByUserIdAndProductIdRequest{
    userId: number;
    productId: number;
}
