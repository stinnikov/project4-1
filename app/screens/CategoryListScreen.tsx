import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "../components/SearchComponent";
import BlockComponent from "../components/BlockComponent";
import { Router, SplashScreen } from "expo-router";
import CategoryListComponent from "../components/CategoryListComponent";
import { Category } from "../interfaces/Category";
import { Product } from "../interfaces/Product";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";
import { getCategoriesById, getCategoryById } from "../services/CategoryService";

interface CategoryListScreenProps {
    router: Router,
    currentCategory: Category,
    categories: Category[],
}

function renderScreen(props: CategoryListScreenProps) {
    return (
        <View>
            <View>
                <BlockComponent
                    content={<ScreenHeaderComponent title={props.currentCategory.name} router={props.router} />}
                    contentStyle={{ paddingBottom: 0 }}
                />
            </View>
            <View>
                <BlockComponent
                    content={<SearchComponent />}
                />
            </View>

            <View>
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