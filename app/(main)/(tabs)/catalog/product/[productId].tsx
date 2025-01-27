import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Product } from '@/app/interfaces/Product';
import ProductCardComponent from '@/app/components/ProductCardComponent';
import { useState, useEffect } from 'react';
import { getSingleProductByIdAsync } from '@/app/services/ProductService';
import ProductCardScreen from '@/app/screens/ProductCardScreen';
import LoadingScreen from '@/app/screens/LoadingScreen';

export default function () {
    const { productId } = useLocalSearchParams();
    const router = useRouter();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    if (typeof productId === 'string') {
        useEffect(() => {
            const getEntries = async () => {
                try {
                    var getProductResponse = await getSingleProductByIdAsync(productId)
                    if (getProductResponse) {
                        setProduct(getProductResponse);
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
        return <LoadingScreen></LoadingScreen>;
    }

    if (product) {
        return (
            <View style={styles.container}>
                <ProductCardScreen product={product} router={router} ></ProductCardScreen>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})