import React, { useState, useCallback } from 'react';
import { View, Image, StyleSheet, RefreshControl, Text, ViewStyle, ImageBackground } from 'react-native';
import Product from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { Montserrat400RegularText } from '../Text/TextComponents';
import { BasketButtonComponent, BasketProductInfoPanel } from '../Buttons/ButtonComponents';
import { colorsStyles } from '@/src/styles/styles';


interface BasketListItemProps {
    data: Product;
    style?: ViewStyle,
    router: Router;
}

const BasketListItem: React.FC<BasketListItemProps> = React.memo((props) => {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.productImgContainer}>
                <ImageBackground style={{ width: '100%', height: '100%' }} imageStyle={{ borderRadius: 12 }} source={{ uri: props.data.imageUrl }} resizeMode="contain">
                </ImageBackground>
            </View>

            <View style={styles.productInfoContainer}>
                <Montserrat400RegularText numOfLines={2} style={{ flex: 1, flexWrap: 'wrap', fontSize: 14 }} text={props.data.name} />

                <View style={styles.productPriceAndPurchaseInfoContainer}>
                    <View style={styles.priceTextContainer}>
                        <Montserrat400RegularText style={{ paddingHorizontal: 12, paddingVertical: 4, fontSize: 14 }} text={props.data.price} />
                    </View>

                    <BasketProductInfoPanel style={{ borderRadius: 6, paddingHorizontal: 12, }} product={props.data} />
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
        // borderRadius: 12,
        // elevation: 5,
        // shadowRadius: 10,
        // shadowOpacity: 0.2,
        // shadowOffset: { width: 0, height: 6 },
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