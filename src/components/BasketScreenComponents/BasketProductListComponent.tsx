
import React, { useState, memo, useCallback, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { colorsStyles, commonStyles, dimensionsStyles } from '@/src/styles/styles';
import BasketProductCard from './BasketProductCardComponent';
import svgIcons from '@/src/assets/icons/svgIcons';
import SvgIcons from '@/assets/icons/svgIcons';
import { ClearBasketButton } from '../Buttons/ButtonComponents';


interface ProductListProps {
    data: Product[];
    router: Router;
}

const getItemLayout = (data: any, index: number) => ({
    length: dimensionsStyles.productCard.height,
    offset: dimensionsStyles.productCard.height * index,
    index,
});



const BasketProductListComponent: React.FC<ProductListProps> = (props) => {
    const [products, setProducts] = useState<Product[]>(props.data);

    const clearBasket = () => {
        setProducts([]);
    };

    const ListHeader = () => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: 30, marginBottom: 16 }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <svgIcons.SortIcon fill={colorsStyles.mainBrightColor.color} width={18} height={18} />
                <Text style={styles.listTitle}>Сортировка</Text>
            </TouchableOpacity>

            <ClearBasketButton onClear={clearBasket} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
        </View>
    );

    const renderProduct = useCallback(({ item }: { item: Product }) => (
        <BasketProductCard
            data={item}
            router={props.router}
        />
    ), [props.router]);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={products}
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    list: {
        padding: 16,
    },

    listTitle: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: colorsStyles.mainBrightColor.color,
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

export default BasketProductListComponent;
