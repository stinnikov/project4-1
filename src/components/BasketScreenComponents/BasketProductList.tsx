import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl, Text } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { colorsStyles } from '@/src/styles/styles';
import { getBasketByUserIdAsync } from '@/src/services/BasketService';
import BasketProductListHeader from './BasketProductListHeader';
import BasketListItem from './BasketListItem';

interface BasketProductListProps {
    data: Product[];
    router: Router;
}




const BasketProductList: React.FC<BasketProductListProps> = (props) => {
    const [products, setProducts] = useState<Product[]>(props.data);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const favouriteProductsResponse = await getBasketByUserIdAsync();
            if (favouriteProductsResponse) {
                setProducts(favouriteProductsResponse);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const clearBasket = React.useCallback(() => {
        setProducts([]);
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchData().finally(() => setRefreshing(false));
    }, []);

    function navigateToProduct(product: Product) {
        props.router.push(
            {
                pathname: '/(main)/(tabs)/(basket)/product/[productId]',
                params: {
                    productId: product.id,
                }
            }
        )
    }

    function renderProduct({ item }: { item: Product }) {
        return (
            <BasketListItem style={{ paddingHorizontal: 16, paddingBottom: 12 }} data={item} router={props.router} />
        )
    };

    return (
        <View style={styles.container}>
            <BasketProductListHeader style={{ marginHorizontal: 16, marginVertical: 12 }} amountOfProducts={(props.data.length).toString()} onClear={clearBasket} />
            <FlatList
                style={styles.list}
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                initialNumToRender={2}
                refreshControl={
                    <RefreshControl
                        tintColor={colorsStyles.mainBrightColor.color}
                        colors={[colorsStyles.mainBrightColor.color]}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsStyles.mainWhiteColor.color,
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 16,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    list: {

    },
});

export default BasketProductList;
