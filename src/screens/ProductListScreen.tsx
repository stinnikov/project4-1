import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "@/src//components/SearchComponent";
import { Router, SplashScreen, useFocusEffect } from "expo-router";
import ProductListComponent from "@/src//components/ProductListComponent";
import ScreenHeaderComponent from "@/src//components/ScreenHeaderComponent";
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
}



function renderLoadingScreen() {

}



const ProductListScreen: React.FC<ProductListScreenProps> = React.memo((props) => {
    const [products, setProducts] = useState<Product[]>(props.products)
    const [categoryName, setCategoryName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useFocusEffect(
        React.useCallback(() => {

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

            setDataAsync();
            // Функция для очистки при анфокусе
            return () => {
                setProducts([]); // Очищаем список продуктов при анфокусе
            };
        }, []) // Убедитесь, что здесь пустой массив
    );

    if (loading) {
        return (<LoadingScreen />)
    }

    function renderScreen(props: ProductListScreenProps) {
        return (
            <View>
                <View style={{ margin: 16 }}>
                    <ScreenHeaderComponent
                        title={categoryName}
                        router={props.router}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <SearchComponent />
                </View>

                <View>
                    <ProductListComponent
                        data={products}
                        router={props.router}
                    />
                </View>
            </View>
        )
    }

    const DATA: ProductListScreenProps[] = [
        props,
    ]

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: colorsStyles.mainWhiteColor.color }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <FlatList
                    data={DATA}
                    renderItem={() => renderScreen(props)}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
);

const styles = StyleSheet.create({
    topGoods: {
        flex: 1
    }
})

export default React.memo(ProductListScreen);