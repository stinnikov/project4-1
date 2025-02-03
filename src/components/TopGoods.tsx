import React from "react";
import { View, StyleSheet, FlatList, ViewStyle } from "react-native";
import { Router } from "expo-router";
import { Product } from "@/src/interfaces/Product";
import { dimensionsStyles } from "@/src/styles/styles";
import { StyleProp } from "react-native";
import ProductCard from "./ProductCard";
import { ScreenSectionTitleText } from "./Text/TextComponents";

interface TopGoodsProps {
    data: Product[];
    router: Router,
    style?: StyleProp<ViewStyle>,
    parentTab: 'catalog' | 'favourites' | 'home' | 'profile' | 'basket'
}



const TopGoods: React.FC<TopGoodsProps> = (props) => {
    function renderProduct({ item }: { item: Product }) {
        return (
            <ProductCard
                style={{ marginLeft: 16 }}
                data={item}
                router={props.router}
                parentTab={props.parentTab}
            />
        );
    }

    return (
        <View style={styles.container}>
            <ScreenSectionTitleText
                text="Топ товары"
                style={{ padding: 16 }}
            />
            <FlatList
                style={styles.list}
                data={props.data}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={5}
                bounces={false}
                nestedScrollEnabled={true}
                getItemLayout={(data, index) => ({
                    length: dimensionsStyles.topGoodsCard.width,
                    offset: dimensionsStyles.topGoodsCard.width * index,
                    index
                }
                )}
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