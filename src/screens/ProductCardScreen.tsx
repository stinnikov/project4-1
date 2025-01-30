import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import ProductPageComponent from '@/src/components/ProductPageComponent';
import { Router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ProductCardProps {
    product: Product,
    router: Router;
}
const ProductCardScreen: React.FC<ProductCardProps> = (props) => {


    return (
        <SafeAreaView style={styles.container}>
            <ProductPageComponent
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