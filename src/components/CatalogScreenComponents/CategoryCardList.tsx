
import React, { useMemo, useCallback } from 'react';
import { View, FlatList, StyleSheet, } from 'react-native';
import { Category } from '@/src/interfaces/Category';
import { Router } from 'expo-router';
import { dimensionsStyles } from '@/src/styles/styles';
import CardComponent from '../CardComponent';
import { ipv4 } from '@/src/data/tempData';
import { Raleway600SemiBoldText } from '../Text/TextComponents';

interface CategoryCardListProps {
    data: Category[];
    router: Router;
}

const getItemLayout = (data: any, index: number) => ({
    length: dimensionsStyles.categoryCard.height,
    offset: dimensionsStyles.categoryCard.height * index,
    index,
});

const CategoryCardList: React.FC<CategoryCardListProps> = (props) => {
    const preparedData = useMemo(() => {
        return props.data;
    }, [props.data]);

    const ListHeader = useCallback(() => (
        <Raleway600SemiBoldText
            text='Категории'
            style={{ paddingBottom: 16 }}
        />
    ), []);

    const renderCategory = useCallback(({ item }: { item: Category }) => (
        <CardComponent
            item={item}
            router={props.router}
            titleText={item.name}
            textStyle={{ color: 'white' }}
            imageUri={`${ipv4}/getImageByCategoryId?categoryId=${item.id}`}
            style={{ height: dimensionsStyles.categoryCard.height, width: dimensionsStyles.categoryCard.width }}
        />
    ), [props.router]);

    return (
        <View style={styles.container}>
            <FlatList
                data={preparedData}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id.toString()} // Приведение ID к строке для уникальности
                numColumns={2}
                showsVerticalScrollIndicator={false}
                initialNumToRender={2}
                ListHeaderComponent={ListHeader}
                columnWrapperStyle={styles.column}
                getItemLayout={getItemLayout}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    column: {
        gap: 10,
        marginBottom: 10,
    },
});

export default React.memo(CategoryCardList);
