// ProductList.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../interfaces/Product';
import { Router } from 'expo-router';

interface ProductListProps {
    products: Product[];
    title?:string;
    router?: Router;
}

const ProductList: React.FC<ProductListProps> = ({ products, router }) => {

    const renderProduct = ({ item }: { item: Product }) => (
        <TouchableOpacity onPress={() => router?.push( {

            pathname: "./product/[productId]",
            params: { 
                productId: item.id,
            },
          } )} 
        style={styles.product}>
            <Text style={styles.productName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    product: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    productName: {
        fontSize: 18,
    },
});

export default ProductList;