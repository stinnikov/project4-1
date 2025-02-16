import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import CategoryListScreen from '@/src/screens/CategoryListScreen';
import ProductListScreen from '@/src/screens/ProductListScreen';
import LoadingScreen from '@/src/screens/LoadingScreen';
import useCategoryStore from '@/src/store/categoryStore';
import { useFocusEffect } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colorsStyles } from '@/src/styles/styles';

export default function () {
    const { categoryId } = useLocalSearchParams();
    const [loading, setLoading] = useState<boolean>(true);
    const { currentCategory, categories, fetchCategoryData } = useCategoryStore();

    useFocusEffect(
        React.useCallback(() => {
            setLoading(true); // Устанавливаем загрузку в true перед загрузкой данных
            if (typeof categoryId === 'string') {
                fetchCategoryData(categoryId).finally(() => setLoading(false));
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
