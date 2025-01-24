import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Product } from '@/app/interfaces/Product';
import ProductListScreen from '@/app/screens/ProductListScreen';
import LoadingScreen from '@/app/screens/LoadingScreen';
import { getFavouritesProductsAsync } from '@/app/services/ProductService';

export default function FavouritesScreen() {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEntries = async () => {
            try {
                const getFavouriteProductsResponse = await getFavouritesProductsAsync();

                getFavouriteProductsResponse && setProducts(getFavouriteProductsResponse);
            }
            finally {
                setLoading(false);
            }
        };
        getEntries()
    }, []);


    if (loading) {
        return <LoadingScreen></LoadingScreen>;
    }

    if (products) {
        return (
            <ProductListScreen products={products} categoryName={"Избранное"} router={router} />
        );
    }

    return null; // Возвращаем null, если нет данных для отображения
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});