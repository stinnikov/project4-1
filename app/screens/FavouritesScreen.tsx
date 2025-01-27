import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "../components/SearchComponent";
import { Router, SplashScreen, useFocusEffect } from "expo-router";
import ProductListComponent from "../components/ProductListComponent";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";
import { Product } from "../interfaces/Product";
import { colorsStyles } from "../styles/styles";
import LoadingScreen from "./LoadingScreen";
import { getFavouritesProductsAsync } from "../services/ProductService";

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
                <View style={{ margin: 16 }}>
                    <ScreenHeaderComponent
                        title={props.categoryName}
                        router={props.router}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <SearchComponent />
                </View>
                <View style={{ flex: 1 }}>
                    <ProductListComponent
                        data={products}
                        router={props.router}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
});


const styles = StyleSheet.create({
    topGoods: {
        flex: 1
    }
})

export default React.memo(FavouritesScreen);