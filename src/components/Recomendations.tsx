import React, { useMemo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Router } from "expo-router";
import { dimensionsStyles } from "@/src/styles/styles";
import CategoryCardComponent from "./CategoryCardComponent";
import { Raleway600SemiBoldText } from "./Text/TextComponents";
import { Category } from "../interfaces/Category";

interface RecomendationsProps {
    data: Category[];
}

const Recomendations: React.FC<RecomendationsProps> = React.memo((props) => {
    function renderProduct({ item }: { item: Category }) {
        return (
            <CategoryCardComponent
                category={item}
                titleText='Текст'
                textStyle={{ color: 'white' }}
                style={styles.card} />
        );
    }

    return (
        <View style={styles.container}>
            <Raleway600SemiBoldText
                style={{ padding: 16 }}
                text="Рекомендации"
            />
            <FlatList
                style={styles.list}
                data={props.data}
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
    card: {
        height: dimensionsStyles.recsCard.height,

        paddingLeft: 16,

        width: dimensionsStyles.recsCard.width,
    },
})

export default React.memo(Recomendations);