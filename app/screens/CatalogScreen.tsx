import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Router, SplashScreen } from "expo-router";
import CategoryCardListComponent from "../components/CatalogScreenComponents/CategoryCardListComponent";
import { Category } from "../interfaces/Category";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "../components/SearchComponent";
import { colorsStyles } from "../styles/styles";
import RecomendationsComponent from "../components/RecomendationsComponent";
import { prods } from "../data/tempData";

interface CatalogScreenProps {
    categories: Category[],
    router: Router;
}


function renderScreen({ item }: { item: CatalogScreenProps }) {
    const data = [{}, {}, {}, {}, {}]
    return (
        <View style={{ flex: 1, backgroundColor: colorsStyles.mainWhiteColor.color }}>
            <View style={{ margin: 16 }}>
                <SearchComponent />
            </View>

            <RecomendationsComponent
                data={prods}
                router={item.router}
            />

            <View style={{ margin: 16 }}>
                <CategoryCardListComponent
                    data={item.categories}
                    isMainScreen={false}
                    router={item.router}
                />
            </View>
        </View>
    )
}

export const CatalogScreen: React.FC<CatalogScreenProps> = (props) => {
    const DATA: CatalogScreenProps[] = [
        props,
    ]

    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <FlatList
                    data={DATA}
                    bounces={false}
                    onEndReachedThreshold={10}
                    renderItem={renderScreen}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addressBar: {
        flex: 1,
    },
    search: {
        flex: 0.66,
    },
    catalog: {
        flex: 5,
    },
})

export default CatalogScreen;