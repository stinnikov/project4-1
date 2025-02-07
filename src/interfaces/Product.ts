// Product.tsx
export interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
    amountOfImages: number;
    isFavourite: boolean;
    isInBasket: boolean;
    amountInBasket: number;
}

export default Product;


