import React, { useState, useEffect } from "react";
import { useFocusEffect } from "expo-router";
import { View, StyleSheet, FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Router, SplashScreen } from "expo-router";
import CategoryCardListComponent from "@/src/components/CatalogScreenComponents/CategoryCardListComponent";
import { Category } from "@/src/interfaces/Category";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchComponent from "@/src/components/SearchComponent";
import { colorsStyles } from "../styles/styles";
import RecomendationsComponent from "@/src/components/RecomendationsComponent";
import { prods } from "@/src/data/tempData";
import { getCategoriesDepthZero } from "../services/CategoryService";
import LoadingScreen from "./LoadingScreen";

interface CatalogScreenProps {
    router: Router;
}


export const CatalogScreen: React.FC<CatalogScreenProps> = (props) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEntries = async () => {
            try {
                const getCatsResponse = await getCategoriesDepthZero();
                if (getCatsResponse)
                    setCategories(getCatsResponse);
            }
            finally {
                setLoading(false);
            }
        }
        getEntries();
    }, [])

    if (loading) {
        return (<LoadingScreen></LoadingScreen>)
    }

    if (categories) {
        const DATA = [
            props,
        ]

        function renderScreen({ item }: { item: CatalogScreenProps }) {
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
                            data={categories}
                            router={item.router}
                        />
                    </View>
                </View>
            )
        }

        return (
            <SafeAreaProvider style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                    <StatusBar translucent={true} backgroundColor="transparent" style='dark'></StatusBar>
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