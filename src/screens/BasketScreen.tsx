import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, RefreshControl, TouchableOpacity, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "@/src//components/SearchComponent";
import { Router, SplashScreen, useFocusEffect } from "expo-router";
import ProductListComponent from "@/src//components/ProductListComponent";
import ScreenHeaderComponent from "@/src//components/ScreenHeaderComponent";
import { Product } from "@/src//interfaces/Product";
import { colorsStyles } from "@/src//styles/styles";
import LoadingScreen from "./LoadingScreen";
import svgIcons from "@/assets/icons/svgIcons";
import { getBasketByUserIdAsync } from "../services/BasketService";
import BasketProductListComponent from "../components/BasketScreenComponents/BasketProductListComponent";
import BasketProductCardComponent from "../components/BasketScreenComponents/BasketProductCardComponent";
import { ClearBasketButton } from "../components/Buttons/ButtonComponents";
import { commonStyles, dimensionsStyles } from "@/src//styles/styles";
import { StatusBar } from "expo-status-bar";

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

    const ListHeader = () => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: 30, marginBottom: 16 }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <svgIcons.SortIcon fill={colorsStyles.mainBrightColor.color} width={18} height={18} />
                <Text style={styles.listTitle}>Сортировка</Text>
            </TouchableOpacity>

            <ClearBasketButton onClear={clearBasket} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
        </View>
    );

    function renderItem({ item }: { item: Product }) {
        return (
            <BasketProductCardComponent
                data={item}
                router={props.router}
            />
        );
    }

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
                <FlatList
                    style={{ flex: 1, padding: 16 }}
                    data={products}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    initialNumToRender={2}
                    removeClippedSubviews={true}
                    ListHeaderComponent={ListHeader}
                    columnWrapperStyle={styles.column}
                    getItemLayout={getItemLayout}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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