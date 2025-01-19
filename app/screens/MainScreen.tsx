import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Router } from "expo-router";
import { Category } from "../interfaces/Category";
import { Product } from "../interfaces/Product";
import RecomendationsComponent from "../components/RecomendationsComponent";
import TopGoodsComponent from "../components/TopGoodsComponent";
import TopComponent from "../components/TopComponent";

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

            {/* <View>
                <RecomendationsComponent
                    router={props.router}
                    data={}
                />
            </View>

            <View>
                <TopGoodsComponent
                    data={}
                    router={props.router}
                    
                />
            </View> */}
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