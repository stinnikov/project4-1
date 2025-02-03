
import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { colorsStyles, dimensionsStyles } from '@/src/styles/styles';
import BasketProductCard from './BasketProductCard';
import { getBasketByUserIdAsync } from '@/src/services/BasketService';
import BasketProductListHeader from './BasketProductListHeader';

interface BasketProductListProps {
    data: Product[];
    router: Router;
}

const getItemLayout = (data: any, index: number) => ({
    length: dimensionsStyles.productCard.height,
    offset: dimensionsStyles.productCard.height * index,
    index,
});



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

    const renderProduct = useCallback(({ item }: { item: Product }) => (
        <BasketProductCard
            data={item}
            router={props.router}
        />
    ), [props.router]);

    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1, padding: 16 }}
                data={products}
                renderItem={renderProduct}
                numColumns={2}
                keyExtractor={(item) => item.id}
                initialNumToRender={2}
                removeClippedSubviews={true}
                ListHeaderComponent={<BasketProductListHeader onClear={clearBasket} />}
                columnWrapperStyle={styles.column}
                getItemLayout={getItemLayout}
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

export default BasketProductList;
