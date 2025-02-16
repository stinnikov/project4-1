import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { Router, SplashScreen, useFocusEffect, useRouter } from "expo-router";
import ProductList from "@/src/components/ProductList";
import ScreenHeader from "@/src/components/ScreenHeader";
import { Product } from "@/src//interfaces/Product";
import { colorsStyles } from "@/src//styles/styles";
import { StatusBar } from "expo-status-bar";
import LoadingScreen from "./LoadingScreen";
import { getProductsByCategoryIdAsync } from "../services/ProductService";
import { getCategoryNameById } from "../services/CategoryService";
import useNavigationStore from "../store/navigationStore";
import useProductStore from "../store/productsStore";
import Constants from 'expo-constants'

interface ProductListScreenProps {
    categoryId: string,
    parentTab: 'basket' | 'home' | 'profile' | 'catalog' | 'favourites';
}



const ProductListScreen: React.FC<ProductListScreenProps> = ({ categoryId, parentTab }) => {
    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);
    const { fetchProductsByCategory, products } = useProductStore();
    const [categoryName, setCategoryName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            await fetchProductsByCategory(categoryId);

            setCategoryName(await getCategoryNameById(categoryId) ?? '')
        };

        setRouter(router);
        fetchData().finally(() => { setLoading(false) });
    }, [categoryId, fetchProductsByCategory]);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         // Функция для очистки при анфокусе
    //         return () => {
    //         };
    //     }, []) // Убедитесь, что здесь пустой массив
    // );

    if (loading) {
        return (<LoadingScreen />)
    }

    return (
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
            <ScreenHeader
                title={categoryName}
            />
            <View style={styles.searchBar}>
                <SearchBar />
            </View>
            <View style={styles.productList}>
                <ProductList
                    products={products}
                    parentTab={parentTab}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    column: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    searchBar: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    productList: {
        flex: 1,

    }
})

export default ProductListScreen;