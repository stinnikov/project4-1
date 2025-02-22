import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import CategoryListScreen from '@/src/screens/CategoryListScreen';
import ProductListScreen from '@/src/screens/ProductListScreen';
import LoadingScreen from '@/src/screens/LoadingScreen';
import useCategoryStore from '@/src/store/categoryStore';
import { useFocusEffect } from 'expo-router';
import useNavigationStore from '@/src/store/navigationStore';

export default function () {
    const { categoryId } = useLocalSearchParams();
    const { currentCategory, categories, fetchCategoryData, loading } = useCategoryStore();
    useFocusEffect(
        React.useCallback(() => {
            if (typeof categoryId === 'string') {
                fetchCategoryData(categoryId);
            }
        }, [categoryId, fetchCategoryData])
    );

    if (loading) {
        return <LoadingScreen />;
    }

    if (currentCategory && categories) {
        // Проверяем наличие подкатегорий
        if (categories.length === 0) {
            return (
                <ProductListScreen
                    categoryId={currentCategory.id} // Передаем id текущей категории
                    parentTab='catalog' // Замените на нужный вам таб
                />
            );
        }

        return (
            <CategoryListScreen
                currentCategory={currentCategory}
                categories={categories}
            />
        );
    }

    return null; // Если не удалось загрузить данные
}
