import { create } from "zustand";
import Product from "../interfaces/Product";
import { addProductInBasketAsync, getBasketByUserIdAsync, clearBasketByUserId } from "../services/BasketService";

// создаем интерфейс для магазина корзины
interface BasketStore {
    products: Product[];
    totalAmount: number;
    addProduct: (product: Product) => Promise<void>;  // Принимает продукт в качестве параметра
    removeProduct: (product: Product) => void;
    clearBasket: () => Promise<void>;
    initializeBasket: () => Promise<void>; // метод для инициализации корзины
}

// создаем магазин корзины, реализуя интерфейс BasketStore
const useBasketStore = create<BasketStore>((set) => ({
    products: [], // начальное значение пустое
    totalAmount: 0, // начальное значение для totalAmount
    addProduct: async (product: Product) => {
        await addProductInBasketAsync(product.id); // добавляем продукт в корзину
        const basketProducts = await getBasketByUserIdAsync(); // получаем обновленный список продуктов в корзине
        set((state) => {
            const updatedProducts = basketProducts ?? [];
            const totalAmount = updatedProducts.reduce((sum, item) => sum + (item.amountInBasket || 0), 0);
            return { products: updatedProducts, totalAmount };
        }); // обновляем состояние
    },
    removeProduct: (product: Product) => set((state) => {
        const updatedProducts = state.products.filter(item => item.id !== product.id);
        const totalAmount = updatedProducts.reduce((sum, item) => sum + (item.amountInBasket || 0), 0);
        return { products: updatedProducts, totalAmount };
    }),
    clearBasket: async () => {
        await clearBasketByUserId().catch((error) => {
            console.error('Ошибка при попытке очистить корзину:', error);
        })
        set(() => {
            return { products: [], totalAmount: 0 }
        })
    },
    initializeBasket: async () => {
        const basketProducts = await getBasketByUserIdAsync();
        const totalAmount = (basketProducts ?? []).reduce((sum, item) => sum + (item.amountInBasket || 0), 0);
        set({ products: basketProducts ?? [], totalAmount }); // обновляем состояние после загрузки
    },
}));

export default useBasketStore;