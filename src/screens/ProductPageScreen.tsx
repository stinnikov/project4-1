import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import ProductPage from '@/src/components/ProductPage';
import { Router, useFocusEffect, useRouter } from 'expo-router';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { getSingleProductByIdAsync } from '../services/ProductService';
import useNavigationStore from '../store/navigationStore';
import Constants from 'expo-constants';


interface ProductCardProps {
    product: Product,
}
const ProductCardScreen: React.FC<ProductCardProps> = (props) => {
    const [product, setProduct] = useState<Product | null>(props.product);
    const [loading, setLoading] = useState<boolean>(product ? true : false);
    const [refreshing, setRefreshing] = useState(false);

    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);


    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);

    const fetchData = async () => {
        setLoading(true);
        try {
            if (product) {
                const getProductResponse = await getSingleProductByIdAsync(product.id);
                if (getProductResponse) {
                    setProduct(getProductResponse);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchData().finally(() => setRefreshing(false));
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
            return () => {
                setProduct(null);
            };
        }, [])
    );
    if (product)
        return (
            <View style={{ flex: 1 }}>
                <ProductPage
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    product={product}
                />
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ProductCardScreen;