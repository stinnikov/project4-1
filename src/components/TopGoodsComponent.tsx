import React from "react";
import { View, StyleSheet, FlatList, Text, ViewStyle } from "react-native";
import { Router } from "expo-router";
import { Product } from "@/src/interfaces/Product";
import { commonStyles, dimensionsStyles } from "@/src/styles/styles";
import { StyleProp } from "react-native";
import ProductCardComponent from "./ProductCardComponent";

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
                style={{ paddingLeft: 16 }}
                data={item}
                router={props.router}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>Топ товары</Text>
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
    listTitle: {
        fontSize: commonStyles.title.fontSize,
        fontWeight: commonStyles.title.fontWeight,
        fontFamily: commonStyles.title.fontFamily,
        marginTop: 8,
        paddingLeft: commonStyles.title.padding,
    },
    itemWrap: {
        paddingLeft: 16,
    }
})

export default TopGoodsComponent;