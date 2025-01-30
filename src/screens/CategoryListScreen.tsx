import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, Text, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "@/src/components/SearchComponent";
import { Router, SplashScreen } from "expo-router";
import CategoryListComponent from "@/src/components/CatalogScreenComponents/CategoryListComponent";
import { Category } from "@/src/interfaces/Category";
import ScreenHeaderComponent from "@/src/components/ScreenHeaderComponent";
import { colorsStyles, commonStyles } from "../styles/styles";
import { ipv4 } from "../data/tempData";
import { StatusBar } from "expo-status-bar";

interface CategoryListScreenProps {
    router: Router,
    currentCategory: Category,
    categories: Category[],
}


const CategoryListScreen: React.FC<CategoryListScreenProps> = React.memo((props: CategoryListScreenProps) => {
    function renderScreen() {
        if (props.currentCategory.depth === 0) {
            return (
                <View style={{ backgroundColor: colorsStyles.mainWhiteColor.color, width: '100%', height: '80%' }}>
                    <ImageBackground style={{ width: '100%', height: '100%' }} resizeMode="cover" source={{ uri: `${ipv4}/getImageByCategoryId?categoryId=${props.currentCategory.id}` }}>
                        <View style={{ position: 'absolute', backgroundColor: 'black', width: '100%', height: '100%', opacity: 0.2 }}></View>
                        <SafeAreaView style={{ flex: 1, padding: 16, justifyContent: 'space-between' }}>
                            <ScreenHeaderComponent title={props.currentCategory.name} router={props.router} />
                            <SearchComponent />
                        </SafeAreaView>
                    </ImageBackground>


                    <View style={{ margin: commonStyles.general.margin }}>
                        <StatusBar translucent={true} backgroundColor="transparent" style='dark'></StatusBar>
                        <CategoryListComponent
                            currentCategory={props.currentCategory}
                            data={props.categories}
                            router={props.router}
                        />
                    </View>
                </View>
            )
        }

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

    const DATA: CategoryListScreenProps[] = [
        props,
    ]

    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <FlatList
                data={DATA}
                renderItem={renderScreen}
            />
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