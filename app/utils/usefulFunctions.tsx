import { Category } from "../interfaces/Category";
import {Product} from '../interfaces/Product';

export function getNameOfCategoryById(id: string, categories : Category[]|undefined): string | undefined {
    const categoryName = categories?.find(item => item.id === id);
    return categoryName ? categoryName.name : undefined;
}

export function getNameOfProductById(id: string, products : Product[]|undefined): string | undefined {
    const productName = products?.find(item => item.id === id);
    return productName ? productName.name : undefined;
}
