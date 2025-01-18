import { Category } from "../interfaces/Category";
import { ipv4 } from "../data/tempData";

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
export const getCategoryById = async (id: string) => {
    try {
        const response = await fetch(`${ipv4}/getCategoryById?id=${id}`)

        const mappedResponse: Category = await response.json();

        return mappedResponse;
    }
    catch (error) {
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

export default () => { };