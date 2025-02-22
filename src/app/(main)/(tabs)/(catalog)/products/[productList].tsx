import React, { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ProductListScreen from '@/src/screens/ProductListScreen';
import useNavigationStore from '@/src/store/navigationStore';

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