import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable, ViewStyle } from 'react-native';
import svgIcons from '@/src/assets/icons/svgIcons';
import { commonStyles, colorsStyles } from '@/src/styles/styles';
import { Router } from 'expo-router';
import { Product } from '@/src/interfaces/Product';
import { addFavoriteProductAsync, deleteFavoriteProductAsync } from '@/src/services/ProductService';



interface FavouriteButtonProps {
    product: Product,
    style?: ViewStyle,
}

export const FavouriteButtonComponent: React.FC<FavouriteButtonProps> = React.memo((props) => {
    const product = props.product;
    const [color, setColor] = useState<string>(product.isFavourite ? colorsStyles.mainBrightColor.color.toString() : 'none')



    function handlePressFavouriteButton() {
        if (product.isFavourite === true) {
            deleteFavoriteProductAsync(product.id);
            setColor('none');
            product.isFavourite = false;
        }
        else {
            addFavoriteProductAsync(product.id);
            setColor(colorsStyles.mainBrightColor.color.toString())
            product.isFavourite = true;
        }
    }

    return (
        <TouchableOpacity style={[commonStyles.icon, props.style]}
            onPress={handlePressFavouriteButton}>
            <svgIcons.FavoritesIcon width={21} height={21} fill={color} stroke={product.isFavourite ? colorsStyles.mainBrightColor.color : '#000'}></svgIcons.FavoritesIcon>
        </TouchableOpacity>
    )
})

interface BackButtonComponentProps {
    router: Router,
    style?: ViewStyle,
}

export const CircleBackButtonComponent: React.FC<BackButtonComponentProps> = React.memo((props) => {
    function handlePressBackButton() {
        props.router.canGoBack() && props.router.back();
    }

    return (
        <Pressable style={[commonStyles.icon, props.style]}
            onPress={handlePressBackButton}>
            <svgIcons.BackArrowIcon width={20} height={20}></svgIcons.BackArrowIcon>
        </Pressable>
    )
})

export default {}