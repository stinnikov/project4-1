
import React, { memo, useCallback } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { colorsStyles } from '@/src/styles/styles';
import ProductCard from './ProductCard';
import svgIcons from '@/src/assets/icons/svgIcons';
import { Montserrat600SemiBoldText } from './Text/TextComponents';


interface ProductListProps {
    products: Product[];
    release?: boolean, // Добавляем пропс для сигнала очистки
    style?: ViewStyle,
    horizontal?: boolean,
    productStyle?: ViewStyle,
    parentTab: 'basket' | 'home' | 'profile' | 'catalog' | 'favourites';
}

function ListSeparator() {
    return (
        <View style={{ marginLeft: 16 }}></View>
    )
}

const ListHeader = memo(() =>
(
    <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', margin: 16 }}>
        <svgIcons.SortIcon fill={colorsStyles.mainBrightColor.color} width={18} height={18} />
        <Montserrat600SemiBoldText
            style={{ color: colorsStyles.mainBrightColor.color }}
            text='Сортировка' />
    </TouchableOpacity>
));

const ProductList: React.FC<ProductListProps> = memo((props) => {
    const renderProduct = useCallback(({ item }: { item: Product }) => (
        <ProductCard
            product={item}
            style={props.productStyle}
            parentTab={props.parentTab}
        />
    ), [props.products]);

    if (props.horizontal) {
        return (
            <View style={[styles.container, props.style]}>
                <FlatList
                    style={styles.horizontalList}
                    data={props.products}
                    renderItem={renderProduct}
                    ItemSeparatorComponent={ListSeparator}
                    keyExtractor={(item) => item.id}
                    initialNumToRender={3}
                    horizontal={true}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }

    return (
        <View style={[styles.container, props.style]}>
            <FlatList
                data={props.products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                numColumns={2}
                initialNumToRender={2}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ListHeader}
                columnWrapperStyle={styles.column}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    column: {
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    horizontalList: {
        padding: 16,
    }
});

export default ProductList;
