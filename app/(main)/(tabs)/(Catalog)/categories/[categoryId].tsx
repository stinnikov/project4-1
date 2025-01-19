"use client"
import { useLocalSearchParams, usePathname, Stack, useRouter, SplashScreen } from 'expo-router';
import CategoryListScreen from '@/app/screens/CategoryListScreen';
import { Category } from '@/app/interfaces/Category';
import { useState, useEffect } from 'react';
import { getCategoriesById, getCategoryNameById, getCategoryById } from '@/app/services/CategoryService';
import { getProductsByCategoryId } from '@/app/services/ProductService';
import { Product } from '@/app/interfaces/Product';
import ProductListScreen from '@/app/screens/ProductListScreen';
import LoadingScreen from '@/app/screens/LoadingScreen';

export default function () {
    const router = useRouter();
    const { categoryId, categoryDepth } = useLocalSearchParams();
    const [currentCategory, setCategory] = useState<Category | undefined>(undefined);
    const [categories, setCategories] = useState<Category[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[] | undefined>(undefined);

    if (typeof categoryId === 'string') {
        useEffect(() => {
            const getEntries = async () => {
                try {
                    const [currentCatResponse, currentCatSubCatsResponse] = await Promise.all(
                        [getCategoryById(categoryId),
                        getCategoriesById(categoryId)]
                    );

                    if (currentCatResponse && currentCatSubCatsResponse) {
                        if (currentCatSubCatsResponse.length === 0) {
                            const getProductsResponse = await getProductsByCategoryId(categoryId);
                            if (getProductsResponse)
                                setProducts(getProductsResponse);
                        }
                        setCategory(currentCatResponse);
                        setCategories(currentCatSubCatsResponse);
                    }
                }
                finally {
                    setLoading(false);
                }
            }
            getEntries();
        }, [])
    }

    if (loading) {
        return (<LoadingScreen></LoadingScreen>)
    }


    if (currentCategory && categories) {
        if (categories.length === 0) {
            if (products)
                return (
                    <ProductListScreen
                        products={products}
                        categoryName={currentCategory.name}
                        router={router}
                    />
                )
        }

        return (
            <CategoryListScreen
                currentCategory={currentCategory}
                categories={categories}
                router={router}
            />
        )
    }

}