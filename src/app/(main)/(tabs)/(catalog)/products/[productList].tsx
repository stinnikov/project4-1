import React, { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ProductListScreen from '@/src/screens/ProductListScreen';
import useNavigationStore from '@/src/store/navigationStore';

export default function () {
    const { productList: categoryId } = useLocalSearchParams();

    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);
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