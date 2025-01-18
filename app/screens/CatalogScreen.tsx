import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Router, SplashScreen } from "expo-router";
import CategoryCardListComponent from "../components/CategoryCardListComponent";
import { Category } from "../interfaces/Category";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import TopComponent from "../components/TopComponent";
import BlockComponent from "../components/BlockComponent";
import { getCategoriesDepthZero } from "../services/CategoryService";

interface CatalogScreenProps {
    categories: Category[],
    router: Router;
}


function renderScreen(props: CatalogScreenProps) {
    return (
        <View style={{ flex: 1 }}>
            <View>
                <TopComponent></TopComponent>
            </View>
            <View>
                <BlockComponent content={
                    <CategoryCardListComponent
                        data={props.categories}
                        isMainScreen={false}
                        router={props.router}
                    />}>
                </BlockComponent>
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
                    renderItem={({ item }) => renderScreen(props)}
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