import type { Product } from "@/types";

interface RatingItem {
  productId: number;
  averageRating: number;
  ratingsCount: number;
}

const getRatingsData=(productData:Product[], ratings:RatingItem[])=>{
    const ratingMap = (ratings as RatingItem[]).reduce<
        Record<number, number>
        >((acc, current) => {
        acc[current.productId] = current.averageRating;
        return acc;
    }, {});

    const ratingsCountMap = (ratings as RatingItem[]).reduce<
        Record<number, number>
        >((acc, current) => {
        acc[current.productId] = current.ratingsCount;
        return acc;
    }, {});

    const mergedData = productData.map((product: Product) => ({
        ...product,
        rating: Number(ratingMap[product.id]),
        ratingsCount: Number(ratingsCountMap[product.id]),
    }));

    return mergedData
}

export default getRatingsData;