import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "../components/SearchComponent";
import { Router, SplashScreen } from "expo-router";
import ProductListComponent from "../components/ProductListComponent";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";
import { Product } from "../interfaces/Product";
import { colorsStyles } from "../styles/styles";
import { getDataAsync } from "../services/AuthService";
import LoadingScreen from "./LoadingScreen";

interface ProductListScreenProps {
    products: Product[],
    categoryName: string,
    router: Router,
}



function renderLoadingScreen() {

}


const ProductListScreen: React.FC<ProductListScreenProps> = React.memo((props) => {


    function renderScreen(props: ProductListScreenProps) {
        return (
            <View>
                <View style={{ margin: 16, paddingBottom: 0 }}>
                    <ScreenHeaderComponent
                        title={props.categoryName}
                        router={props.router}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <SearchComponent />
                </View>

                <View>
                    <ProductListComponent
                        data={props.products}
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