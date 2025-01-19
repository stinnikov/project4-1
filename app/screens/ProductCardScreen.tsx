import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Product } from '@/app/interfaces/Product';
import ProductCardComponent from '@/app/components/ProductCardComponent';
import { Router } from 'expo-router';

interface ProductCardProps {
    product: Product,
    router: Router;
}
const ProductCardScreen: React.FC<ProductCardProps> = (props) => {


    return (
        <View style={styles.container}>
            <ProductCardComponent
                product={props.product}
                router={props.router}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ProductCardScreen;