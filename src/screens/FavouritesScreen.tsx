import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { Router, SplashScreen, useFocusEffect } from "expo-router";
import ProductList from "@/src/components/ProductList";
import ScreenHeader from "@/src/components/ScreenHeader";
import { Product } from "@/src//interfaces/Product";
import { colorsStyles } from "@/src//styles/styles";
import LoadingScreen from "./LoadingScreen";
import { getFavouritesProductsAsync } from "@/src//services/ProductService";
import { StatusBar } from "expo-status-bar";
import FavouritesProductList from "../components/FavouritesScreenComponents/FavouritesProductList";

interface FavouritesScreenProps {
    categoryName: string,
    router: Router,
}

const FavouritesScreen: React.FC<FavouritesScreenProps> = React.memo((props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useFocusEffect(
        React.useCallback(() => {
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
                        router={props.router}
                    />
                </View>
                <View style={styles.searchBar}>
                    <SearchBar />
                </View>
                <View style={styles.productList}>
                    <FavouritesProductList
                        products={products}
                        router={props.router}
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
        paddingHorizontal: 16,
    },
    productList: {
        flexGrow: 1,
        padding: 16,
    }
})

export default React.memo(FavouritesScreen);