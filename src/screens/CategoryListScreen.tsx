import React, { useEffect } from "react";
import { FlatList, View, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { Router, useRouter } from "expo-router";
import CategoryList from "@/src/components/CatalogScreenComponents/CategoryList";
import { Category } from "@/src/interfaces/Category";
import ScreenHeader from "@/src/components/ScreenHeader";
import { colorsStyles, dimensionsStyles } from "../styles/styles";
import { ipv4 } from "../data/tempData";
import { StatusBar } from "expo-status-bar";
import useNavigationStore from "../store/navigationStore";

interface CategoryListScreenProps {
    currentCategory: Category,
    categories: Category[],
}


const CategoryListScreen: React.FC<CategoryListScreenProps> = React.memo((props: CategoryListScreenProps) => {
    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);

    function renderScreen() {
        if (props.currentCategory.depth === 0) {
            return (
                <View style={styles.container}>
                    <StatusBar translucent style='dark' backgroundColor={'transparent'} />
                    <View style={{ flex: 1, minHeight: dimensionsStyles.categoryListImageBackground.height }}>
                        <ImageBackground style={{ width: '100%', height: '100%' }} resizeMode="cover" source={{ uri: `${ipv4}/getImageByCategoryId?categoryId=${props.currentCategory.id}` }}>
                            <View style={{ top: 0, position: 'absolute', backgroundColor: 'black', width: '100%', height: '100%', opacity: 0.2 }}></View>
                            <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, justifyContent: 'space-between' }}>
                                <ScreenHeader style={{ paddingVertical: 16 }} title={props.currentCategory.name} />
                                <SearchBar style={{ paddingVertical: 16 }} />
                            </SafeAreaView>
                        </ImageBackground>
                    </View>


                    <View style={[styles.categoryList, { zIndex: 999, flex: 1 }]}>
                        {/* <StatusBar translucent={true} backgroundColor="transparent" style='dark'></StatusBar> */}
                        <CategoryList
                            currentCategory={props.currentCategory}
                            categories={props.categories}
                        />
                    </View>
                </View>
            )
        }

        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }} edges={['top']}>
                <View style={{ backgroundColor: colorsStyles.mainWhiteColor.color }}>
                    <View style={styles.header}>
                        <ScreenHeader title={props.currentCategory.name} />
                    </View>
                    <View style={styles.searchBar}>
                        <SearchBar />
                    </View>

                    <View style={styles.categoryList}>
                        <CategoryList
                            currentCategory={props.currentCategory}
                            categories={props.categories}
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
        margin: 16,
    },
})

export default CategoryListScreen;