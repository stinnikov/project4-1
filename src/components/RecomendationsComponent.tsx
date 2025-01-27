import React, { useMemo, memo, useRef, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ImageBackground, PanResponder } from "react-native";
import { Router } from "expo-router";
import { Product } from "@/src/interfaces/Product";
import { commonStyles, colorsStyles, dimensionsStyles } from "@/src/styles/styles";
import CardComponent from "./CardComponent";

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
                    length: dimensionsStyles.recsCard.width,
                    offset: dimensionsStyles.recsCard.width * index,
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
        paddingLeft: commonStyles.listTitle.padding,
        marginBottom: commonStyles.listTitle.margin,
        paddingTop: 0,
    },
    card: {
        height: dimensionsStyles.recsCard.height,

        paddingLeft: commonStyles.general.padding,

        width: dimensionsStyles.recsCard.width,
    },
    cardTitle: {

        alignSelf: 'stretch',
    },
    contentStyle: {
        padding: 0,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: commonStyles.general.padding,
    }
})

export default React.memo(RecomendationComponent);