
import React from 'react';
import { View, Text, FlatList, StyleSheet, } from 'react-native';
import { Category } from '@/app/interfaces/Category';
import { Router } from 'expo-router';
import { commonStyles, dimensionsStyles } from '@/app/styles/styles';
import CardComponent from '../CardComponent';
import { ipv4 } from '@/app/data/tempData';

interface CategoryCardListProps {
    data: Category[];
    isMainScreen: boolean;
    router: Router;
}

const CategoryCardListComponent: React.FC<CategoryCardListProps> = (props) => {
    function ListHeader() {
        return (
            <Text style={styles.listTitle}>Категории</Text>
        )
    }

    function renderCategory({ item }: { item: Category }) {
        return (
            <CardComponent
                item={item}
                router={props.router}
                titleText={item.name}
                textStyle={{ color: 'white' }}
                imageUri={`${ipv4}/getImageByCategoryId?categoryId=${item.id}`}
                style={{ height: dimensionsStyles.categoryCard.height, width: dimensionsStyles.categoryCard.width }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ListHeader}
                columnWrapperStyle={styles.column}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    listTitle: {
        fontSize: commonStyles.listTitle.fontSize,
        fontWeight: commonStyles.listTitle.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        marginBottom: commonStyles.listTitle.margin,
    },

    column: {
        gap: 10,
        marginBottom: 10,
    },
});

export default CategoryCardListComponent;
