import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import ProductPageComponent from '@/src/components/ProductPageComponent';
import { Router, useFocusEffect } from 'expo-router';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { getSingleProductByIdAsync } from '../services/ProductService';

interface ProductCardProps {
    product: Product,
    router: Router;
}
const ProductCardScreen: React.FC<ProductCardProps> = (props) => {
    const [product, setProduct] = useState<Product | null>(props.product);
    const [loading, setLoading] = useState<boolean>(product ? true : false);
    const [refreshing, setRefreshing] = useState(false);

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
            <SafeAreaProvider style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                    <ProductPageComponent
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        product={product}
                        router={props.router}
                    />
                </SafeAreaView>
            </SafeAreaProvider>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ProductCardScreen;