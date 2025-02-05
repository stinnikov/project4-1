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
                <View style={{ backgroundColor: colorsStyles.mainWhiteColor.color, width: '100%', height: '80%' }}>
                    {/* <StatusBar translucent style='dark' backgroundColor={'transparent'} /> */}
                    <View>
                        <ImageBackground style={{ width: '100%', height: '100%' }} resizeMode="cover" source={{ uri: `${ipv4}/getImageByCategoryId?categoryId=${props.currentCategory.id}` }}>
                            <View style={{ position: 'absolute', backgroundColor: 'black', width: '100%', height: '100%', opacity: 0.2 }}></View>
                            <SafeAreaView style={{ flex: 1, padding: 16, justifyContent: 'space-between' }}>
                                <ScreenHeader title={props.currentCategory.name} router={props.router} />
                                <SearchBar />
                            </SafeAreaView>
                        </ImageBackground>
                    </View>


                    <View style={{ margin: 16, zIndex: 999 }}>
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
                    <View style={{ margin: 16 }}>
                        <ScreenHeader title={props.currentCategory.name} router={props.router} />
                    </View>
                    <View style={{ margin: 16 }}>
                        <SearchBar />
                    </View>

                    <View style={{ margin: 16 }}>
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