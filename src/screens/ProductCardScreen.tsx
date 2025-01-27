import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import ProductCardComponent from '@/src/components/ProductCardComponent';
import { Router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ProductCardProps {
    product: Product,
    router: Router;
}
const ProductCardScreen: React.FC<ProductCardProps> = (props) => {


    return (
        <SafeAreaView style={styles.container}>
            <ProductCardComponent
                product={props.product}
                router={props.router}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ProductCardScreen;