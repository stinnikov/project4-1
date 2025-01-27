import { Product } from "../interfaces/Product";
import { ipv4 } from "../data/tempData";
import { getDataAsync } from "./AuthService";



export const getProductsByCategoryIdAsync = async (catId: string) => {
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
export const getSingleProductByIdAsync = async (prodId: string) => {
    try {
        const response = await fetch(`${ipv4}/getSingleProductById?Id=${prodId}`)

        const mappedResponse: Product = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}

export const addFavoriteProductAsync = async (prodId: string) => {
    try {
        const userId = await getDataAsync('userId')

        const response = await fetch(`${ipv4}/addFavouriteProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'productId': prodId,
                'userId': userId
            }),

        });
        const data = await response.json();

        return data;
    }
    catch (error) {
        console.error('Error creating item:', error);
    }
}

export const removeFavoriteProductAsync = async (prodId: string) => {

}

export const getFavouritesProductsAsync = async () => {
    try {
        //await new Promise(resolve => setTimeout(resolve, 5000));
        const userId = await getDataAsync('userId')
        const response = await fetch(`${ipv4}/getFavouriteProducts?userId=${userId}`);

        const mappedResponse: Product[] = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}

export default () => { };
