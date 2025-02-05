import React from "react";
import { View, StyleSheet, FlatList, ViewStyle } from "react-native";
import { Router } from "expo-router";
import { Product } from "@/src/interfaces/Product";
import { dimensionsStyles } from "@/src/styles/styles";
import { StyleProp } from "react-native";
import ProductCard from "./ProductCard";
import { Raleway600SemiBoldText } from "./Text/TextComponents";
import ProductList from "./ProductList";

interface TopGoodsProps {
    data: Product[];
    router: Router,
    style?: StyleProp<ViewStyle>,
    parentTab: 'catalog' | 'favourites' | 'home' | 'profile' | 'basket'
}



const TopGoods: React.FC<TopGoodsProps> = (props) => {
    return (
        <View style={styles.container}>
            <Raleway600SemiBoldText
                text="Топ товары"
                style={{ padding: 16 }}
            />
            <ProductList
                data={props.data}
                router={props.router}
                parentTab={props.parentTab}
                horizontal={true}
                productStyle={{ width: 135 }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    list: {
        flexDirection: 'row',
    },
    itemWrap: {
        paddingLeft: 16,
    }
})

export default TopGoods;