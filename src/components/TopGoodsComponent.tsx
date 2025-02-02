import React from "react";
import { View, StyleSheet, FlatList, ViewStyle } from "react-native";
import { Router } from "expo-router";
import { Product } from "@/src/interfaces/Product";
import { dimensionsStyles } from "@/src/styles/styles";
import { StyleProp } from "react-native";
import ProductCardComponent from "./ProductCardComponent";
import { ScreenSectionTitleText } from "./Text/TextComponents";

interface TopGoodsComponentProps {
    data: Product[];
    router: Router,
    style?: StyleProp<ViewStyle>,
    isMainScreen?: boolean,
}



const TopGoodsComponent: React.FC<TopGoodsComponentProps> = (props) => {
    function renderProduct({ item }: { item: Product }) {
        return (
            <ProductCardComponent
                style={{ marginLeft: 16 }}
                data={item}
                router={props.router}
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

export default TopGoodsComponent;