import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, RefreshControl, TouchableOpacity, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "@/src//components/SearchComponent";
import { Router, SplashScreen, useFocusEffect } from "expo-router";
import ScreenHeaderComponent from "@/src//components/ScreenHeaderComponent";
import { Product } from "@/src//interfaces/Product";
import { colorsStyles } from "@/src//styles/styles";
import LoadingScreen from "./LoadingScreen";
import svgIcons from "@/assets/icons/svgIcons";
import { getBasketByUserIdAsync } from "../services/BasketService";
import BasketProductCardComponent from "../components/BasketScreenComponents/BasketProductCardComponent";
import { ClearBasketButton } from "../components/Buttons/ButtonComponents";
import { commonStyles, dimensionsStyles } from "@/src//styles/styles";
import { StatusBar } from "expo-status-bar";
import BasketProductListComponent from "../components/BasketScreenComponents/BasketProductListComponent";

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
                    <ScreenHeaderComponent
                        title={'Корзина'}
                        router={props.router}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <SearchComponent />
                </View>
                <BasketProductListComponent
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
    listTitle: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: colorsStyles.mainBrightColor.color,
        fontFamily: commonStyles.text.fontFamily,
    },
    column: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
})

export default React.memo(BasketScreen);