import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Router } from "expo-router";
import { Product } from "@/src/interfaces/Product";
import { StyleProp } from "react-native";
import { Raleway600SemiBoldText } from "./Text/TextComponents";
import ProductList from "./ProductList";

interface TopGoodsProps {
    data: Product[];
    style?: StyleProp<ViewStyle>;
    parentTab: 'basket' | 'home' | 'profile' | 'catalog' | 'favourites';
}

const TopGoods: React.FC<TopGoodsProps> = (props) => {

    return (
        <View style={[styles.container, props.style]}>
            <Raleway600SemiBoldText
                text="Топ товары"
                style={{ paddingHorizontal: 16, paddingTop: 12 }}
            />
            <ProductList
                products={props.data}
                horizontal={true}
                productStyle={{ width: 170 }}
                parentTab={props.parentTab}
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