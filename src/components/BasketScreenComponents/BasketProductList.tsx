import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, RefreshControl, Text } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { colorsStyles, shadowStyles } from '@/src/styles/styles';
import { getBasketByUserIdAsync } from '@/src/services/BasketService';
import BasketProductListHeader from './BasketProductListHeader';
import BasketListItem from './BasketListItem';
import RequestForOrderInBasketForm from './RequestForOrderInBasketForm';
import useBasketStore from '@/src/store/basketStore';

interface BasketProductListProps {
}

const BasketProductList: React.FC<BasketProductListProps> = (props) => {
    const { products, totalAmount, initializeBasket } = useBasketStore();

    useEffect(() => {
        const fetchData = async () => {
            await initializeBasket();
        };
        fetchData();
    }, [initializeBasket]);

    useEffect(() => {

    }, [products])

    function renderProduct({ item }: { item: Product }) {
        return (
            <BasketListItem
                style={{ paddingHorizontal: 16, paddingBottom: 16 }}
                product={item}
            />
        )
    };

    return (
        <View style={[styles.container, shadowStyles.regularShadow]}>
            <BasketProductListHeader style={{ marginHorizontal: 16, marginVertical: 12 }} amount={(totalAmount).toString()}
            />
            <FlatList
                style={styles.list}
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                initialNumToRender={2}
            />
            <RequestForOrderInBasketForm style={{ marginHorizontal: 16, marginVertical: 12 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsStyles.mainWhiteColor.color,
        borderRadius: 12,
    },
    list: {

    },
});

export default BasketProductList;
