import React from "react";
import { FlatList, View, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { Router } from "expo-router";
import CategoryList from "@/src/components/CatalogScreenComponents/CategoryList";
import { Category } from "@/src/interfaces/Category";
import ScreenHeader from "@/src/components/ScreenHeader";
import { colorsStyles } from "../styles/styles";
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
                <View style={styles.container}>
                    <StatusBar translucent style='dark' backgroundColor={'transparent'} />
                    <View style={{ flex: 1, minHeight: 300 }}>
                        <ImageBackground style={{ width: '100%', height: '100%' }} resizeMode="cover" source={{ uri: `${ipv4}/getImageByCategoryId?categoryId=${props.currentCategory.id}` }}>
                            <View style={{ top: 0, position: 'absolute', backgroundColor: 'black', width: '100%', height: '100%', opacity: 0.2 }}></View>
                            <SafeAreaView style={{ flex: 1, padding: 16, justifyContent: 'space-between' }}>
                                <ScreenHeader title={props.currentCategory.name} router={props.router} />
                                <SearchBar />
                            </SafeAreaView>
                        </ImageBackground>
                    </View>


                    <View style={[styles.categoryList, { zIndex: 999, flex: 1 }]}>
                        {/* <StatusBar translucent={true} backgroundColor="transparent" style='dark'></StatusBar> */}
                        <CategoryList
                            currentCategory={props.currentCategory}
                            data={props.categories}
                            router={props.router}
                        />
                    </View>
                </View>
            )
        }

        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }} edges={['top']}>
                <View style={{ backgroundColor: colorsStyles.mainWhiteColor.color }}>
                    <View style={styles.header}>
                        <ScreenHeader title={props.currentCategory.name} router={props.router} />
                    </View>
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
    header: {
        margin: 16,
    },
    searchBar: {
        margin: 16,
    },
    categoryList: {
        flexGrow: 1,
        margin: 16,
    },
})

export default CategoryListScreen;