import React from "react";
import { View, StyleSheet, FlatList, Text, ViewStyle } from "react-native";
import { router, Router } from "expo-router";
import { Product } from "../interfaces/Product";
import { commonStyles, dimensionsStyles } from "../styles/styles";
import BlockComponent from "./BlockComponent";
import { StyleProp } from "react-native";
import TopGoodsCardComponent from "./TopGoodsCardComponent";

interface TopGoodsComponentProps {
    data: Product[];
    router: Router,
    style?: StyleProp<ViewStyle>,
    isMainScreen?: boolean,
}

function renderProduct({ item, props }: { item: Product, props: TopGoodsComponentProps }) {
    return (
        <TopGoodsCardComponent
            data={item}
            router={router}
            isMainScreen={props.isMainScreen}
        />
    );
}

function renderTopGoodsList(props: TopGoodsComponentProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>Топ товары</Text>
            <FlatList
                style={styles.list}
                data={props.data}
                renderItem={(item) => renderProduct({ item: item.item, props: props })}
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
    )
}

const TopGoodsComponent: React.FC<TopGoodsComponentProps> = React.memo((props) => {
    return (
        renderTopGoodsList(props)
    );
});


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    list: {
        flexDirection: 'row',
    },
    listTitle: {
        fontSize: commonStyles.listTitle.fontSize,
        fontWeight: commonStyles.listTitle.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        marginBottom: commonStyles.listTitle.margin,
        paddingLeft: commonStyles.listTitle.padding,
    },
})

export default React.memo(TopGoodsComponent);