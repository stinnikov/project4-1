import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "@/src//components/SearchComponent";
import { Router, SplashScreen, useFocusEffect } from "expo-router";
import ProductListComponent from "@/src//components/ProductListComponent";
import ScreenHeaderComponent from "@/src//components/ScreenHeaderComponent";
import { Product } from "@/src//interfaces/Product";
import { colorsStyles } from "@/src//styles/styles";
import LoadingScreen from "./LoadingScreen";
import { getBasketByUserIdAsync } from "../services/BasketService";
import BasketProductListComponent from "../components/BasketScreenComponents/BasketProductListComponent";

interface BasketScreenProps {
    router: Router,
}

const BasketScreen: React.FC<BasketScreenProps> = React.memo((props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const favouriteProductsResponse = await getBasketByUserIdAsync();
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
            return () => {
                setProducts([]);
            };
        }, [])
    );

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: colorsStyles.mainWhiteColor.color }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <View style={{ margin: 16, flexDirection: 'row', width: '100%' }}>
                    <ScreenHeaderComponent
                        title={'Корзина'}
                        router={props.router}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <SearchComponent />
                </View>
                <View style={{ flex: 1 }}>
                    <BasketProductListComponent
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

export default React.memo(BasketScreen);