import { create } from 'zustand';
import { Category } from '@/src/interfaces/Category';
import { Product } from '@/src/interfaces/Product';
import { getCategoriesById, getCategoriesDepthZero, getCategoryById } from '@/src/services/CategoryService';
import { getProductsByCategoryIdAsync } from '@/src/services/ProductService';

interface CategoryStore {
    currentCategory: Category | undefined;
    categories: Category[] | undefined;
    products: Product[] | undefined;
    loading: boolean,
    fetchCategoryData: (categoryId: string) => Promise<void>;
    fetchDepthZeroCategories: () => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
    currentCategory: undefined,
    categories: undefined,
    products: undefined,
    loading: true,
    fetchCategoryData: async (categoryId: string) => {
        try {
            set({ loading: true });
            const [currentCatResponse, currentCatSubCatsResponse] = await Promise.all([
                getCategoryById(categoryId),
                getCategoriesById(categoryId),
            ]);

            set({ currentCategory: currentCatResponse, categories: currentCatSubCatsResponse });

            if (currentCatSubCatsResponse?.length === 0) {
                const productsResponse = await getProductsByCategoryIdAsync(categoryId);
                set({ products: productsResponse });
            }
        } catch (error) {
            console.error(error);
        }
        finally {
            set({ loading: false });
        }
    },
    fetchDepthZeroCategories: async () => {
        set({ loading: true });
        try {
            const response = await getCategoriesDepthZero();
            set({ categories: response });
        } catch (error) {
            console.error(error);
        } finally {
            set({ loading: false });
        }
    },
}));

export default useCategoryStore;
