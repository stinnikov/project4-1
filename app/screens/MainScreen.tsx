import React, { useMemo } from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { Stack, Router } from "expo-router";
import { Category } from "../interfaces/Category";
import { Product } from "../interfaces/Product";
import RecomendationsComponent from "../components/RecomendationsComponent";
import { products } from "../data/products";
import commonStyles from "../styles/commonStyles";
import TopGoodsComponent from "../components/TopGoodsComponent";
import TopComponent from "../components/TopComponent";
import BlockComponent from "../components/BlockComponent";

interface MainScreenProps {
    categoriesData?: Category[];
    topGoodsData?: Product[];
    router: Router;
}

function renderScreen(props: MainScreenProps) {
    return (
        <View>
            <View>
                <TopComponent></TopComponent>
            </View>

            <View>
                <RecomendationsComponent
                    router={props.router}
                    data={products.slice(0, 20)}
                />
            </View>

            <View>
                <TopGoodsComponent
                    data={props.topGoodsData ?? products.slice(0, 20)}
                    router={props.router}
                    
                />
            </View>
        </View>
    )
}

export const MainScreen: React.FC<MainScreenProps> = React.memo((props) => {
    const DATA: MainScreenProps[] = [
        props,
    ]
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => renderScreen(item)}
            />
        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default React.memo(MainScreen);