import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import ProductListScreen from '@/src/screens/ProductListScreen';
import LoadingScreen from '@/src/screens/LoadingScreen';
import useProductStore from '@/src/store/productsStore';
import Product from '@/src/interfaces/Product';

export default function () {
    const { productList: categoryId } = useLocalSearchParams();


    // if (loading) {
    //     return <LoadingScreen />;
    // }

    if (typeof categoryId === 'string') {
        return (
            <ProductListScreen
                categoryId={categoryId}
                parentTab='catalog'
            />
        );
    }

    return null; // Возвращаем null, если нет данных для отображения
}