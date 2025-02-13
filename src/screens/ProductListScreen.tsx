import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { Router, SplashScreen, useFocusEffect } from "expo-router";
import ProductList from "@/src/components/ProductList";
import ScreenHeader from "@/src/components/ScreenHeader";
import { Product } from "@/src//interfaces/Product";
import { colorsStyles } from "@/src//styles/styles";
import { StatusBar } from "expo-status-bar";
import LoadingScreen from "./LoadingScreen";
import { getProductsByCategoryIdAsync } from "../services/ProductService";
import { getCategoryNameById } from "../services/CategoryService";

interface ProductListScreenProps {
    products: Product[],
    categoryId: string,
    router: Router,
    parentTab: 'catalog' | 'favourites' | 'home' | 'profile' | 'basket'
}

const ProductListScreen: React.FC<ProductListScreenProps> = (props) => {
    const [products, setProducts] = useState<Product[]>(props.products)
    const [categoryName, setCategoryName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [release, setRelease] = useState<boolean>(false);

    const setDataAsync = async () => {
        try {
            const [getProductsResponse, getCategoryNameResponse] = await Promise.all(
                [
                    getProductsByCategoryIdAsync(props.categoryId),
                    getCategoryNameById(props.categoryId)
                ]

            );

            getProductsResponse && setProducts(getProductsResponse);
            getCategoryNameResponse && setCategoryName(getCategoryNameResponse);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setDataAsync();
        return () => {
            setProducts([]);
        }
    }, [])

    function clearProductList() {
        setRelease(true);
    }

    function setProductList() {
        setRelease(false);
    }

    useFocusEffect(
        React.useCallback(() => {
            setProductList();
            // Функция для очистки при анфокусе
            return () => {
                clearProductList();
            };
        }, []) // Убедитесь, что здесь пустой массив
    );

    if (loading) {
        return (<LoadingScreen />)
    }

    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <StatusBar
                    translucent={false}
                    style='dark'
                    backgroundColor={colorsStyles.mainBrightColor.color.toString()}
                />
                <ScreenHeader
                    title={categoryName}
                    router={props.router}
                />
                <View style={styles.searchBar}>
                    <SearchBar />
                </View>
                <View style={styles.productList}>
                    <ProductList
                        data={products}
                        parentTab={props.parentTab}
                        router={props.router}
                        release={release}
                        onRefresh={setDataAsync}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
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