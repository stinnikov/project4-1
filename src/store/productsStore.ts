import { create } from 'zustand';
import { Product } from '@/src/interfaces/Product';
import { getProductsByCategoryIdAsync, getFavouritesProductsAsync, addFavoriteProductAsync, deleteFavoriteProductAsync } from '@/src/services/ProductService';

interface ProductStore {
    products: Product[];
    favourites: Product[];
    fetchProductsByCategory: (catId: string) => Promise<void>;
    fetchFavourites: () => Promise<void>;
    addFavourite: (prodId: string) => Promise<void>;
    removeFavourite: (prodId: string) => Promise<void>;
    updateProductInBasket: (prodId: string, amount: number) => void;
}

const useProductStore = create<ProductStore>((set) => ({
    products: [],
    favourites: [],
    fetchProductsByCategory: async (catId: string) => {
        const getProductsResponse = await getProductsByCategoryIdAsync(catId);
        setTimeout(() => { }, 5000)
        set((state) => ({
            products: getProductsResponse,
        }));
    },

    fetchFavourites: async () => {
        const favourites = await getFavouritesProductsAsync();
        set({ favourites });
    },

    addFavourite: async (prodId: string) => {
        await addFavoriteProductAsync(prodId);
        set((state) => {
            const productIndex = state.products.findIndex((p) => p.id === prodId);
            if (productIndex === -1) return state; // Если продукт не найден, ничего не делаем

            const product = { ...state.products[productIndex], isFavourite: true }; // Создаем новый объект продукта
            const updatedProducts = [...state.products];
            updatedProducts[productIndex] = product; // Заменяем старый объект новым
            console.log('ADDED:')
            console.log(product);

            return { products: updatedProducts, favourites: [...state.favourites, product] };
        });
    },

    removeFavourite: async (prodId: string) => {
        await deleteFavoriteProductAsync(prodId);
        set((state) => {
            const updatedFavourites = state.favourites.filter((p) => p.id !== prodId);
            const productIndex = state.products.findIndex((p) => p.id === prodId);
            if (productIndex === -1) return state; // Если продукт не найден, ничего не делаем

            const product = { ...state.products[productIndex], isFavourite: false }; // Создаем новый объект продукта
            const updatedProducts = [...state.products];
            updatedProducts[productIndex] = product; // Заменяем старый объект новым
            console.log('REMOVED:')
            console.log(product);

            return { products: updatedProducts, favourites: updatedFavourites };
        });
    },

    updateProductInBasket: (prodId: string, amount: number) => {
        set((state) => {
            const productIndex = state.products.findIndex((p) => p.id === prodId);
            if (productIndex === -1) return state; // Если продукт не найден, ничего не делаем

            const product = { ...state.products[productIndex], isInBasket: amount > 0, amountInBasket: amount }; // Создаем новый объект продукта
            const updatedProducts = [...state.products];
            updatedProducts[productIndex] = product; // Заменяем старый объект новым

            return { products: updatedProducts };
        });
    },
}));

export default useProductStore;