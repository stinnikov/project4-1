import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { Router, useFocusEffect } from "expo-router";
import ScreenHeader from "@/src/components/ScreenHeader";
import { Product } from "@/src//interfaces/Product";
import { colorsStyles } from "@/src//styles/styles";
import LoadingScreen from "./LoadingScreen";
import { getBasketByUserIdAsync } from "../services/BasketService";
import { dimensionsStyles } from "@/src//styles/styles";
import { StatusBar } from "expo-status-bar";
import BasketProductList from "../components/BasketScreenComponents/BasketProductList";

interface BasketScreenProps {
    router: Router,
}

const getItemLayout = (data: any, index: number) => ({
    length: dimensionsStyles.productCard.height,
    offset: dimensionsStyles.productCard.height * index,
    index,
});

const BasketScreen: React.FC<BasketScreenProps> = React.memo((props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState(false);

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


    useFocusEffect(
        React.useCallback(() => {
            fetchData();
            return () => {
                setProducts([]);
            };
        }, [])
    );

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchData().finally(() => setRefreshing(false));
    }, []);

    const clearBasket = () => {
        setProducts([]);
    };


    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: colorsStyles.mainWhiteColor.color }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <StatusBar translucent={true} backgroundColor="transparent" style='dark'></StatusBar>
                <View style={{ margin: 16, flexDirection: 'row', width: '100%' }}>
                    <ScreenHeader
                        title={'Корзина'}
                        router={props.router}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <SearchBar />
                </View>
                <BasketProductList
                    data={products}
                    router={props.router}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
});


const styles = StyleSheet.create({
    topGoods: {
        flex: 1
    },
    column: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
})

export default React.memo(BasketScreen);