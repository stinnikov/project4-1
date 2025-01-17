import React from "react";
import { View, StyleSheet, FlatList, Text, ViewStyle } from "react-native";
import { router, Router } from "expo-router";
import { Product } from "../interfaces/Product";
import commonStyles from "../styles/commonStyles";
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
                    length: commonStyles.topGoodsCard.width,
                    offset: commonStyles.topGoodsCard.width * index,
                    index
                }
                )}
            />
        </View>
    )
}

const TopGoodsComponent: React.FC<TopGoodsComponentProps> = React.memo((props) => {
    return (
        <BlockComponent
            contentStyle={[styles.contentStyle, props.style]}

            content={renderTopGoodsList(props)}
        />

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
    productCard: {
        height: commonStyles.topGoodsCard.height,
        width: commonStyles.topGoodsCard.width + commonStyles.topGoodsCard.padding,
        paddingLeft: commonStyles.topGoodsCard.padding,
    },
    contentStyle: {
        padding: 0,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: commonStyles.topGoodsBlock.padding,
        paddingBottom: commonStyles.topGoodsBlock.padding,
        borderRadius: commonStyles.topGoodsBlock.borderRadius,
        backgroundColor: commonStyles.mainGreyColor.color,
    }
})

export default React.memo(TopGoodsComponent);