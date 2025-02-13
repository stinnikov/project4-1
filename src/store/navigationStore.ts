import { create } from "zustand";
import { Router } from "expo-router";
import { Category } from "../interfaces/Category";
import Product from "../interfaces/Product";

interface NavigationStore {
    router: Router | null; // Router может быть null
    setRouter: (router: Router) => void; // Метод для установки router
    navigateToProductListScreen: (category: Category) => void;
    navigateToCategoryListScreen: (category: Category) => void;
    navigateToProductPageScreen: (product: Product, parentTab: 'basket' | 'home' | 'profile' | 'catalog' | 'favourites') => void;
    navigateBack: () => void;
}

const useNavigationStore = create<NavigationStore>()((set) => ({
    router: null,
    setRouter: (router) => set({ router }),
    navigateToProductListScreen: (category) => {
        set(state => {
            const { router } = state;
            if (router) {
                router.push({
                    pathname: '/(main)/(tabs)/(catalog)/products/[productList]',
                    params: {
                        productList: category.id,
                        categoryId: category.id,
                    }
                });
            }
            return state; // Возвращаем текущее состояние
        });
    },
    navigateToCategoryListScreen: (category) => {
        set(state => {
            const { router } = state;
            console.log(router);
            if (router) {
                router.push({
                    pathname: '/(main)/(tabs)/(catalog)/categories/[categoryId]',
                    params: {
                        categoryId: category.id,
                        categoryDepth: category.depth,
                    },
                });
            }
            return state; // Возвращаем текущее состояние
        });
    },
    navigateToProductPageScreen: (product, parentTab) => {
        set(state => {
            const { router } = state;
            if (router) {
                const pathname = `/(main)/(tabs)/(${parentTab})/product/[productId]`;
                router.push({
                    pathname: pathname,
                    params: {
                        productId: product.id,
                    }
                });
            }
            return state; // Возвращаем текущее состояние
        });
    },
    navigateBack: () => {
        set(state => {
            const { router } = state;
            console.log(router);
            router?.dismiss();
            return state;
        })
    }
}));

export default useNavigationStore;