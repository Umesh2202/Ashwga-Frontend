export interface OrderItemRequest{
    name: string | undefined,
    amount: number,
    userId: number,
    productId: string | undefined
}

export interface DeleteOrderRequest{
    userId: number,
    productId: number
}