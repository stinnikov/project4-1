import React, { useMemo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Router } from "expo-router";
import { Product } from "@/src/interfaces/Product";
import { dimensionsStyles } from "@/src/styles/styles";
import CardComponent from "./CardComponent";
import { ScreenSectionTitleText } from "./Text/TextComponents";

interface RecomendationsProps {
    data: Product[];
    router: Router,
}

const Recomendations: React.FC<RecomendationsProps> = React.memo((props) => {
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
            <ScreenSectionTitleText
                style={{ padding: 16 }}
                text="Рекомендации"
            />
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
    card: {
        height: dimensionsStyles.recsCard.height,

        paddingLeft: 16,

        width: dimensionsStyles.recsCard.width,
    },
})

export default React.memo(Recomendations);