import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '@/app/interfaces/Product';
import ProductCardComponent from '@/app/components/ProductCardComponent';
import { useState, useEffect } from 'react';
import { getSingleProductById } from '@/app/services/ProductService';
import ProductCardScreen from '@/app/screens/ProductCardScreen';
import LoadingScreen from '@/app/screens/LoadingScreen';

export default function () {


    const { topGoodId } = useLocalSearchParams();

    const router = useRouter();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    if (typeof topGoodId === 'string') {
        useEffect(() => {
            const getEntries = async () => {
                try {
                    var getProductResponse = await getSingleProductById(topGoodId)
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
        return (<LoadingScreen></LoadingScreen>)
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