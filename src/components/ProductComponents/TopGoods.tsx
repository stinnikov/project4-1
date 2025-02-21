import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Router } from "expo-router";
import { Product } from "@/src/interfaces/Product";
import { StyleProp } from "react-native";
import { Raleway600SemiBoldText } from "../Text/TextComponents";
import ProductList from "./ProductList";
import { dimensionsStyles } from "../../styles/styles";

interface TopGoodsProps {
    data: Product[];
    style?: StyleProp<ViewStyle>;
    parentTab: 'basket' | 'home' | 'profile' | 'catalog' | 'favourites';
}

const TopGoods: React.FC<TopGoodsProps> = (props) => {

    return (
        <View style={[styles.container, props.style]}>
            <View>
                <Raleway600SemiBoldText
                    text="Топ товары"
                    style={{ paddingHorizontal: 16, paddingTop: 12 }}
                />
            </View>
            <ProductList
                products={props.data}
                horizontal={true}
                productStyle={{ width: dimensionsStyles.productListCard.width * 0.9 }}
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