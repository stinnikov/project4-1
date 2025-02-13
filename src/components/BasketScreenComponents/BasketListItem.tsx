import React, { useState, useCallback } from 'react';
import { View, Image, StyleSheet, RefreshControl, Text, ViewStyle, ImageBackground } from 'react-native';
import Product from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { Montserrat400RegularText } from '../Text/TextComponents';
import { colorsStyles } from '@/src/styles/styles';
import { BasketProductInfoPanel } from '../Buttons/ButtonComponents';


interface BasketListItemProps {
    product: Product;
    style?: ViewStyle,
}

const BasketListItem: React.FC<BasketListItemProps> = React.memo((props) => {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.productImgContainer}>
                <ImageBackground
                    style={{ width: '100%', height: '100%' }}
                    imageStyle={{ borderRadius: 12 }}
                    source={{ uri: props.product.imageUrl }} resizeMode="contain"
                />
            </View>

            <View style={styles.productInfoContainer}>
                <Montserrat400RegularText
                    numOfLines={2}
                    style={{ flex: 1, flexWrap: 'wrap', fontSize: 14 }}
                    text={props.product.name} />

                <View style={styles.productPriceAndPurchaseInfoContainer}>
                    <View style={styles.priceTextContainer}>
                        <Montserrat400RegularText
                            style={{ paddingHorizontal: 12, paddingVertical: 4, fontSize: 14 }}
                            text={props.product.price}
                        />
                    </View>

                    <BasketProductInfoPanel
                        style={{ borderRadius: 6, paddingHorizontal: 12, }}
                        product={props.product}
                    />
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
    productImgContainer: {
        flex: 1,
    },
    productInfoContainer: {
        flex: 4,
        marginLeft: 16,
        justifyContent: 'space-between'
    },
    productPriceAndPurchaseInfoContainer: {
        width: '100%',
        flexShrink: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    priceTextContainer: {
        justifyContent: 'center',
        backgroundColor: colorsStyles.mainLightGreyColor.color,
        borderRadius: 6,
    }

})

export default BasketListItem;