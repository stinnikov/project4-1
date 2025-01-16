import React, { useMemo, memo, useRef, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ImageBackground, PanResponder } from "react-native";
import { Router } from "expo-router";
import { Product } from "../interfaces/Product";
import commonStyles from "../styles/commonStyles";
import { products } from "../data/products";
import CardComponent from "./CardComponent";
import BlockComponent from "./BlockComponent";

interface RecomendationComponentProps {
    data: Product[];
    router: Router,
}

const RecomendationComponent: React.FC<RecomendationComponentProps> = React.memo((props) => {
    const memoizedData = useMemo(() => props.data, [props.data]);

    function renderProduct({ item }: { item: Product }) {
        return (
            <CardComponent
                item={item}
                router={props.router}
                titleText='Текст'
                textStyle={{ color: 'white' }}
                style={styles.card} />
        );
    }

    function renderRecList() {
        return (
            <View style={styles.container}>
                <Text style={styles.listTitle}>Рекомендации</Text>
                <FlatList
                    style={styles.list}
                    data={memoizedData}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={5}
                    nestedScrollEnabled={true}
                    bounces={false}
                    getItemLayout={(data, index) => ({
                        length: commonStyles.recsCard.width,
                        offset: commonStyles.recsCard.width * index,
                        index
                    }
                    )}
                />
            </View>
        )
    }

    return (
        <BlockComponent
            content={renderRecList()}
            contentStyle={styles.contentStyle}
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
        paddingLeft: commonStyles.listTitle.padding,
        marginBottom: commonStyles.listTitle.margin,
        paddingTop: 0,
    },
    card: {
        height: commonStyles.recsCard.height,

        paddingLeft: commonStyles.recsCard.padding,

        width: commonStyles.recsCard.width,
    },
    cardTitle: {

        alignSelf: 'stretch',
    },
    contentStyle: {
        padding: 0,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: commonStyles.block.padding,
    }
})

export default React.memo(RecomendationComponent);