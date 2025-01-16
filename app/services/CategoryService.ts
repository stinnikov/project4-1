import { Category } from "../interfaces/Category";

const ipv4 = 'http://192.168.0.87:5055';

export const getCategoriesDepthZero = async () => {
    try {
        const response = await fetch(`${ipv4}/getCategoriesDepthZero`)


        const mappedResponse: Category[] = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}
export const getCategoriesById = async (id: string) => {
    try {
        const response = await fetch(`${ipv4}/getFilledCategoriesById?superGroupId=${id}`)

        const mappedResponse: Category[] = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}
export const getCategoryById = async(id: string) => {
    try {
        const response = await fetch(`${ipv4}/getCategoryById?id=${id}`)

        const mappedResponse: Category = await response.json();

        return mappedResponse;
    }
    catch(error){
        console.error(error);
    }
}
export const getCategoryNameById = async (id: string) => {
    try {
        const response = await fetch(`${ipv4}/getCategoryNameById?id=${id}`)

        const mappedResponse: string = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}