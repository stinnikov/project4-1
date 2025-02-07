import React, { useState } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
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
import DeliveryBar from "../components/DeliveryBar";

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

    function renderScreen() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <ScreenHeader
                        title={'Корзина'}
                        router={props.router}
                    />
                </View>
                <View style={{ marginHorizontal: 16 }}>
                    <DeliveryBar />
                </View>
                <View style={styles.productList}>
                    <BasketProductList
                        data={products}
                        router={props.router}
                    />
                </View>
            </View>
        )
    }


    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: colorsStyles.mainWhiteColor.color }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <FlatList
                    data={[{}]}
                    renderItem={renderScreen}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
})





const styles = StyleSheet.create({
    column: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    header: {
        flexDirection: 'row',
        padding: 16,
        width: '100%'
    },
    searchBar: {
        margin: 16,
    },
    productList: {
        flex: 1,
        margin: 16,
    }
})

export default React.memo(BasketScreen);