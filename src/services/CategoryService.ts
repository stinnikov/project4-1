import { Category } from "@/src/interfaces/Category";
import { ipv4 } from "@/src/data/tempData";

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
export const getCategoriesById = async (categoryId: string) => {
    try {
        const response = await fetch(`${ipv4}/getFilledCategoriesById?superGroupId=${categoryId}`)

        const mappedResponse: Category[] = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}
export const getCategoryById = async (categoryId: string) => {
    try {
        const response = await fetch(`${ipv4}/getCategoryById?id=${categoryId}`)

        const mappedResponse: Category = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}
export const getCategoryNameById = async (categoryId: string) => {
    try {
        const response = await fetch(`${ipv4}/getCategoryNameById?id=${categoryId}`)

        const mappedResponse: string = await response.json();

        return mappedResponse;
    }
    catch (error) {
        console.error(error);
    }
}

// export const getImageByCategoryId = async (categoryId: string) => {
//     try {
//         const response: URL = await fetch(`${ipv4}/getImageByCategoryId?categoryId=${categoryId}`)

//         return response
//     }
//     catch (error) {
//         console.error(error);
//     }
// }

export default () => { };