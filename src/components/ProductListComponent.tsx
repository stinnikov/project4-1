
import React, { useMemo, memo, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { commonStyles, dimensionsStyles } from '@/src/styles/styles';
import ProductListCardComponent from './ProductListCardComponent';
import svgIcons from '@/src/assets/icons/svgIcons';


interface ProductListProps {
    data: Product[];
    router: Router;
}

const getItemLayout = (data: any, index: number) => ({
    length: dimensionsStyles.productCard.height,
    offset: dimensionsStyles.productCard.height * index,
    index,
});

const ListHeader = memo(() => (
    <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 30,
        marginBottom: 16,
    }}>
        <svgIcons.SortIcon width={20} height={20} />
        <Text style={styles.listTitle}>Сортировка</Text>
    </TouchableOpacity>
));

const ProductListComponent: React.FC<ProductListProps> = React.memo((props) => {
    const renderProduct = useCallback(({ item }: { item: Product }) => (
        <ProductListCardComponent
            data={item}
            router={props.router}
        />
    ), [props.router]);



    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={props.data}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                numColumns={2}
                initialNumToRender={2}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ListHeader}
                columnWrapperStyle={styles.column}
                getItemLayout={getItemLayout}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    list: {
        padding: 16,
    },

    listTitle: {
        fontSize: 18,
        fontWeight: 'semibold',
        fontFamily: commonStyles.text.fontFamily,
    },
    productCard: {
        height: dimensionsStyles.productListCard.height,
        width: dimensionsStyles.productListCard.width,
    },
    column: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
});

export default ProductListComponent;
