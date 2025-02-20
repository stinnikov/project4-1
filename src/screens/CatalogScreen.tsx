import React, { useEffect } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { View, StyleSheet, FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';
import CategoryCardList from "@/src/components/CatalogScreenComponents/CategoryCardList";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { colorsStyles } from "../styles/styles";
import RecomendationsComponent from "@/src/components/Recomendations";
import LoadingScreen from "./LoadingScreen";
import useNavigationStore from "../store/navigationStore";
import useCategoryStore from "../store/categoryStore"; // Импортируем новое состояние
import useProductStore from "../store/productsStore";

interface CatalogScreenProps { }

export const CatalogScreen: React.FC<CatalogScreenProps> = (props) => {
    const { categories, loading, fetchDepthZeroCategories } = useCategoryStore(); // Используем состояние из Zustand
    const { products } = useProductStore();

    useEffect(() => {
        fetchDepthZeroCategories(); // Загрузка категорий при монтировании компонента
    }, [fetchDepthZeroCategories]);

    if (loading) {
        return <LoadingScreen />;
    }

    const DATA = [props];

    function renderScreen({ item }: { item: CatalogScreenProps }) {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <SearchBar />
                </View>

                <RecomendationsComponent
                    data={products.slice(0, 10)}
                />

                <View style={styles.categoryList}>
                    <CategoryCardList
                        data={categories ?? []}
                    />
                </View>
            </View>
        );
    }

    return (
        <FlatList
            data={DATA}
            bounces={false}
            onEndReachedThreshold={10}
            renderItem={renderScreen}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        margin: 16,
    },
    categoryList: {
        margin: 16,
    },
});

export default CatalogScreen;
