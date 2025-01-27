import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "@/src/components/SearchComponent";
import { Router, SplashScreen } from "expo-router";
import CategoryListComponent from "@/src/components/CatalogScreenComponents/CategoryListComponent";
import { Category } from "@/src/interfaces/Category";
import ScreenHeaderComponent from "@/src/components/ScreenHeaderComponent";
import { colorsStyles, commonStyles } from "../styles/styles";

interface CategoryListScreenProps {
    router: Router,
    currentCategory: Category,
    categories: Category[],
}

function renderScreen(props: CategoryListScreenProps) {
    return (
        <View style={{ backgroundColor: colorsStyles.mainWhiteColor.color }}>
            <View style={{ margin: commonStyles.general.margin }}>
                <ScreenHeaderComponent title={props.currentCategory.name} router={props.router} />
            </View>
            <View style={{ margin: commonStyles.general.margin }}>
                <SearchComponent />
            </View>

            <View style={{ margin: commonStyles.general.margin }}>
                <CategoryListComponent
                    currentCategory={props.currentCategory}
                    data={props.categories}
                    router={props.router}
                />
            </View>
        </View>
    )
}


const CategoryListScreen: React.FC<CategoryListScreenProps> = React.memo((props: CategoryListScreenProps) => {
    const DATA: CategoryListScreenProps[] = [
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

export default CategoryListScreen;