
import React, { memo, useCallback } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { colorsStyles, dimensionsStyles } from '@/src/styles/styles';
import ProductCardComponent from './ProductCardComponent';
import svgIcons from '@/src/assets/icons/svgIcons';
import { SortListText } from './Text/TextComponents';


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
        <svgIcons.SortIcon fill={colorsStyles.mainBrightColor.color} width={18} height={18} />
        <SortListText
            text='Сортировка'
        />
    </TouchableOpacity>
));

const ProductListComponent: React.FC<ProductListProps> = React.memo((props) => {
    const renderProduct = useCallback(({ item }: { item: Product }) => (
        <ProductCardComponent
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
