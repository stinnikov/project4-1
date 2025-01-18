import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "../components/SearchComponent";
import BlockComponent from "../components/BlockComponent";
import { Router, SplashScreen } from "expo-router";
import ProductListComponent from "../components/ProductListComponent";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";
import { Product } from "../interfaces/Product";

interface ProductListScreenProps {
    products: Product[],
    categoryName: string,
    router: Router,
}

function renderScreen(props: ProductListScreenProps) {
    return (
        <View>
            <View>
                <BlockComponent
                    content={<ScreenHeaderComponent
                        title={props.categoryName}
                        router={props.router}
                    />}
                    contentStyle={{ paddingBottom: 0 }}
                />
            </View>
            <View>
                <BlockComponent
                    content={<SearchComponent></SearchComponent>}
                />
            </View>

            <View>
                <ProductListComponent data={props.products} router={props.router}>

                </ProductListComponent>
            </View>
        </View>
    )
}

function renderLoadingScreen() {

}


const ProductListScreen: React.FC<ProductListScreenProps> = React.memo((props) => {


    const DATA: ProductListScreenProps[] = [
        props,
    ]

    return (
        <SafeAreaProvider style={{ flex: 1 }}>
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

export default ProductListScreen;