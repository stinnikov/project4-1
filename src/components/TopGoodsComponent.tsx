import React from "react";
import { View, StyleSheet, FlatList, Text, ViewStyle } from "react-native";
import { Router } from "expo-router";
import { Product } from "@/src/interfaces/Product";
import { commonStyles, dimensionsStyles } from "@/src/styles/styles";
import { StyleProp } from "react-native";
import TopGoodsCardComponent from "./TopGoodsCardComponent";

interface TopGoodsComponentProps {
    data: Product[];
    router: Router,
    style?: StyleProp<ViewStyle>,
    isMainScreen?: boolean,
}



const TopGoodsComponent: React.FC<TopGoodsComponentProps> = React.memo((props) => {
    function renderProduct({ item }: { item: Product }) {
        return (
            <TopGoodsCardComponent
                data={item}
                router={props.router}
                isMainScreen={props.isMainScreen}
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
        marginTop: 8,
        paddingLeft: commonStyles.listTitle.padding,
    },
})

export default React.memo(TopGoodsComponent);