import { ipv4 } from "../data/tempData";
import { getDataAsync } from "./AuthService";
import { Product } from "../interfaces/Product";

export const addProductInBasketAsync = async (prodId: string) => {
    try {
        const userId = await getDataAsync('userId')
        console.log(userId);

        const response = await fetch(`${ipv4}/addProductInBasket`, {
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

export const getBasketByUserIdAsync = async () => {
    try {
        const userId = await getDataAsync('userId')

        const response = await fetch(`${ipv4}/getBasketByUserId?userId=${userId}`);

        const mappedResponse: Product[] = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}

export const deleteProductFromBasket = async (prodId: string) => {
    try {
        const userId = await getDataAsync('userId');

        const response = await fetch(`${ipv4}/deleteProductFromBasket`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'productId': prodId,
                'userId': userId
            }),
        });
    }
    catch (error) {
        console.error('Error creating item:', error);
    }
}

export const clearBasketByUserId = async () => {
    try {
        const userId = await getDataAsync('userId');

        const response = await fetch(`${ipv4}/clearBasketByUserId?userId=${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            }),
        });
    }
    catch (error) {
        console.error('Error creating item:', error);
    }
}

export default () => { };