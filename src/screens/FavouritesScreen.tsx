import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { Router, useFocusEffect, useRouter } from "expo-router";
import ScreenHeader from "@/src/components/ScreenHeader";
import { Product } from "@/src//interfaces/Product";
import { colorsStyles } from "@/src//styles/styles";
import LoadingScreen from "./LoadingScreen";
import { getFavouritesProductsAsync } from "@/src//services/ProductService";
import FavouritesProductList from "../components/FavouritesScreenComponents/FavouritesProductList";
import useNavigationStore from "../store/navigationStore";

interface FavouritesScreenProps {
    categoryName: string,
}

const navigateToProductPage = (router: Router, product: Product) => {
    router.push(
        {
            pathname: '/(main)/(tabs)/(favourites)/product/[productId]',
            params: {
                productId: product.id,
            }
        }
    )
}

const FavouritesScreen: React.FC<FavouritesScreenProps> = React.memo((props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const favouriteProductsResponse = await getFavouritesProductsAsync();
            if (favouriteProductsResponse) {
                setProducts(favouriteProductsResponse);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchData();

            // Функция для очистки при анфокусе
            return () => {
                setProducts([]); // Очищаем список продуктов при анфокусе
            };
        }, []) // Убедитесь, что здесь пустой массив
    );

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: colorsStyles.mainWhiteColor.color }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <View style={styles.header}>
                    <ScreenHeader
                        title='Избранное'
                    />
                </View>
                <View style={styles.searchBar}>
                    <SearchBar />
                </View>
                <View style={styles.productList}>
                    <FavouritesProductList
                        products={products}
                        onRefresh={fetchData}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
});


const styles = StyleSheet.create({
    column: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    header: {
        margin: 16,
        flexDirection: 'row',
        width: '100%'
    },
    searchBar: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    productList: {
        flex: 1,
    }
})

export default React.memo(FavouritesScreen);