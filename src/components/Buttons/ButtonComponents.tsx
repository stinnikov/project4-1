import React, { useState } from 'react';
import { TouchableOpacity, Pressable, ViewStyle, Text, View, StyleSheet, TextStyle, ColorValue } from 'react-native';
import svgIcons from '@/src/assets/icons/svgIcons';
import { colorsStyles, buttonStyles } from '@/src/styles/styles';
import { Router } from 'expo-router';
import { Product } from '@/src/interfaces/Product';
import { addFavoriteProductAsync, deleteFavoriteProductAsync } from '@/src/services/ProductService';
import { addProductInBasketAsync, clearBasketByUserId, deleteProductFromBasket } from '@/src/services/BasketService';
import AddRemoveProductInBasketPanel from './AddRemoveOneProductPanel';
import useNavigationStore from '@/src/store/navigationStore';
import { Montserrat400RegularText } from '../Text/TextComponents';
import useBasketStore from '@/src/store/basketStore';



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
        <TouchableOpacity style={[buttonStyles.miniButton, props.style]}
            onPress={handlePressFavouriteButton}>
            <svgIcons.FavoritesIcon width={21} height={21} fill={color} stroke={product.isFavourite ? colorsStyles.mainBrightColor.color : '#000'}></svgIcons.FavoritesIcon>
        </TouchableOpacity>
    )
})

interface BackButtonComponentProps {
    style?: ViewStyle,
}

export const BackButtonComponent: React.FC<BackButtonComponentProps> = React.memo((props) => {
    const { navigateBack } = useNavigationStore();

    return (
        <Pressable style={[buttonStyles.miniButton, props.style]}
            onPress={navigateBack}>
            <svgIcons.BackArrowIcon width={20} height={20}></svgIcons.BackArrowIcon>
        </Pressable>
    )
})

interface BasketButtonComponentProps {

    style?: ViewStyle,

}

export const BasketButtonComponent: React.FC<BasketButtonComponentProps> = React.memo((props) => {
    return (
        <View
            style={[{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                backgroundColor: colorsStyles.mainBrightColor.color,
                borderRadius: 12,
                paddingVertical: 8,
                paddingHorizontal: 12,
            }, props.style]}
        >
            <svgIcons.BasketIcon width={16} height={16} />

            <Montserrat400RegularText
                style={{ color: colorsStyles.mainWhiteColor.color }}
                text="В корзину" />

        </View>
    )
})

interface BasketProductInfoPanelProps {
    product: Product,
    style?: ViewStyle,
}

export const BasketProductInfoPanel: React.FC<BasketProductInfoPanelProps> = React.memo((props) => {
    const [amountInBasket, setAmountInBasket] = useState<number>(props.product.amountInBasket);

    function addOneProduct() {
        setAmountInBasket(prevAmount => prevAmount + 1);
        props.product.amountInBasket++;
    }

    function removeOneProduct() {
        if (amountInBasket - 1 >= 0) {
            setAmountInBasket(prevAmount => prevAmount - 1);
            props.product.amountInBasket--;
        }
    }

    //TODO : анимация с "вернуть" как в ВВ
    return (
        <AddRemoveProductInBasketPanel
            product={props.product}
            style={[buttonStyles.basketButton, { backgroundColor: colorsStyles.mainLightGreyColor.color }, props.style || {}]}
            textStyle={{ color: colorsStyles.mainBlackColor.color, fontSize: 10 }}
            iconsColor={colorsStyles.mainBlackColor.color}
            iconsSize={16}
        />
    )

})

interface ClearBasketButtonProps {
    style?: ViewStyle;
}
export const ClearBasketButton: React.FC<ClearBasketButtonProps> = React.memo((props) => {
    const { clearBasket } = useBasketStore();

    return (
        <TouchableOpacity onPress={clearBasket} style={[props.style]}>
            <Montserrat400RegularText style={{ fontSize: 12 }} text='Очистить корзину' />
            <svgIcons.TrashCanIcon></svgIcons.TrashCanIcon>
        </TouchableOpacity>
    )
})

export default {}