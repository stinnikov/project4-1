import { Product } from "../interfaces/Product";
import { ipv4 } from "../data/tempData";



export const getProductsByCategoryId = async (catId: string) => {
    try {
        //await new Promise(resolve => setTimeout(resolve, 5000));

        const response = await fetch(`${ipv4}/getProductsByCategoryId?categoryId=${catId}`)

        const mappedResponse: Product[] = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}
export const getSingleProductById = async (prodId: string) => {
    try {
        const response = await fetch(`${ipv4}/getSingleProductById?Id=${prodId}`)

        const mappedResponse: Product = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}

export const addFavoriteProduct = async (prodId: string) => {
    try {
        const response = await fetch(`${ipv4}/addFavouriteProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'productId': prodId }),

        });
        const data = await response.json();
        console.log('Item created:', data);
        return data;
    }
    catch (error) {
        console.error('Error creating item:', error);
    }
}

export const getFavouritesProducts = async () => {
    try {
        //await new Promise(resolve => setTimeout(resolve, 5000));

        const response = await fetch(`${ipv4}/getFavouriteProducts`);

        const mappedResponse: Product[] = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}

export default () => { };
