import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import { useState, useEffect } from 'react';
import { getSingleProductByIdAsync } from '@/src/services/ProductService';
import ProductCardScreen from '@/src/screens/ProductPageScreen';
import LoadingScreen from '@/src/screens/LoadingScreen';
import useNavigationStore from '@/src/store/navigationStore';

export default function () {
    const { productId } = useLocalSearchParams();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);

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
            <ProductCardScreen product={product}></ProductCardScreen>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})