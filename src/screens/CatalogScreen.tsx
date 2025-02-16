import React, { useState, useEffect } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { View, StyleSheet, FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Router, SplashScreen } from "expo-router";
import CategoryCardList from "@/src/components/CatalogScreenComponents/CategoryCardList";
import { Category } from "@/src/interfaces/Category";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { colorsStyles } from "../styles/styles";
import RecomendationsComponent from "@/src/components/Recomendations";
import { getCategoriesDepthZero } from "../services/CategoryService";
import LoadingScreen from "./LoadingScreen";
import useNavigationStore from "../store/navigationStore";
import useProductStore from "../store/productsStore";

interface CatalogScreenProps {
}


export const CatalogScreen: React.FC<CatalogScreenProps> = (props) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { products } = useProductStore();
    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);

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
                    <StatusBar />
                    <View style={{ margin: 16 }}>
                        <SearchBar />
                    </View>

                    <RecomendationsComponent
                        data={products.slice(0, 10)}
                    />

                    <View style={{ margin: 16 }}>
                        <CategoryCardList
                            data={categories}
                        />
                    </View>
                </View>
            )
        }

        return (
            <FlatList
                data={DATA}
                bounces={false}
                onEndReachedThreshold={10}
                renderItem={renderScreen}
            />
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