"use client"
import { useLocalSearchParams, useRouter, Router } from 'expo-router';
import { View } from 'react-native';
import CategoryListScreen from '@/src/screens/CategoryListScreen';
import { Category } from '@/src/interfaces/Category';
import { useState, useEffect } from 'react';
import { getCategoriesById, getCategoryById } from '@/src/services/CategoryService';
import { getProductsByCategoryIdAsync } from '@/src/services/ProductService';
import { Product } from '@/src/interfaces/Product';
import ProductListScreen from '@/src/screens/ProductListScreen';
import LoadingScreen from '@/src/screens/LoadingScreen';


export default function CategoryIdScreen() {
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
                            const getProductsResponse = await getProductsByCategoryIdAsync(categoryId);
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
        return (<LoadingScreen />)
    }


    if (currentCategory && categories) {
        if (categories.length === 0) {
            if (products && typeof categoryId === 'string')
                return (
                    <View style={{ flex: 1 }}>
                        <ProductListScreen
                            products={products}
                            categoryId={categoryId}
                            parentTab='catalog'
                        />
                    </View>
                )
        }

        return (
            <View style={{ flex: 1 }}>
                <CategoryListScreen
                    currentCategory={currentCategory}
                    categories={categories}
                />
            </View>
        )
    }
}