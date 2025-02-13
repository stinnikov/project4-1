import React from "react";
import { FlatList, View, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { Router } from "expo-router";
import CategoryList from "@/src/components/CatalogScreenComponents/CategoryList";
import { Category } from "@/src/interfaces/Category";
import ScreenHeader from "@/src/components/ScreenHeader";
import { colorsStyles, dimensionsStyles } from "../styles/styles";
import { ipv4 } from "../data/tempData";
import { StatusBar } from "expo-status-bar";
import { Montserrat300LightText } from "../components/Text/TextComponents";
import Constants from 'expo-constants';

interface CategoryListScreenProps {
    router: Router,
    currentCategory: Category,
    categories: Category[],
}


const CategoryListScreen: React.FC<CategoryListScreenProps> = React.memo((props: CategoryListScreenProps) => {
    function renderScreen() {
        if (props.currentCategory.depth === 0) {
            return (
                <View style={styles.container}>
                    <StatusBar
                        translucent style='dark'
                        backgroundColor={'transparent'}
                    />
                    <View style={{ flex: 1, minHeight: dimensionsStyles.categoryListImageBackground.height }}>
                        <ImageBackground style={styles.imageStyle} resizeMode="cover" source={{ uri: `${ipv4}/getImageByCategoryId?categoryId=${props.currentCategory.id}` }}>
                            <View style={{ top: 0, position: 'absolute', backgroundColor: 'black', width: '100%', height: '100%', opacity: 0.2 }}></View>
                            <View style={{ marginTop: Constants.statusBarHeight }}>
                                <ScreenHeader title={props.currentCategory.name} router={props.router} />
                            </View>
                            <SearchBar style={{ margin: 16 }} contentStyle={{ backgroundColor: colorsStyles.mainWhiteColor.color }} />
                        </ImageBackground>
                    </View>
                    <View style={[styles.categoryList, { zIndex: 999, flex: 1 }]}>
                        <CategoryList
                            currentCategory={props.currentCategory}
                            data={props.categories}
                            router={props.router}
                        />
                        <CategoryList
                            currentCategory={props.currentCategory}
                            data={props.categories}
                            router={props.router}
                        />
                    </View>
                </View >
            )
        }

        return (
            <SafeAreaProvider style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }} edges={['top']}>
                    <StatusBar
                        translucent={false}
                        style='dark'
                    />
                    <View style={{ backgroundColor: colorsStyles.mainWhiteColor.color }}>
                        <ScreenHeader title={props.currentCategory.name} router={props.router} />
                        <View style={styles.searchBar}>
                            <SearchBar />
                        </View>

                        <View style={styles.categoryList}>
                            <CategoryList
                                currentCategory={props.currentCategory}
                                data={props.categories}
                                router={props.router}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        )
    }

    const DATA: CategoryListScreenProps[] = [
        props,
    ]

    return (
        <FlatList
            data={DATA}
            renderItem={renderScreen}
        />
    )

}

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
    },
    searchBar: {
        margin: 16,
    },
    categoryList: {
        margin: 16,
    },
})

export default CategoryListScreen;