import React, { useState } from 'react';
import { TouchableOpacity, Pressable, ViewStyle, Text, View, StyleSheet, TextStyle, ColorValue } from 'react-native';
import svgIcons from '@/src/assets/icons/svgIcons';
import { colorsStyles, buttonStyles } from '@/src/styles/styles';
import { Router } from 'expo-router';
import { Product } from '@/src/interfaces/Product';
import { addFavoriteProductAsync, deleteFavoriteProductAsync } from '@/src/services/ProductService';
import { addProductInBasketAsync, clearBasketByUserId, deleteProductFromBasket } from '@/src/services/BasketService';
import { Montserrat600SemiBoldText, Montserrat400RegularText, Montserrat300LightText, Montserrat500MediumText } from '../Text/TextComponents';
import AddRemoveProductInBasketPanel from './AddRemoveOneProductPanel';



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
    router: Router,
    style?: ViewStyle,
}

export const BackButtonComponent: React.FC<BackButtonComponentProps> = React.memo((props) => {
    function handlePressBackButton() {
        props.router.canGoBack() && props.router.back();
    }

    return (
        <Pressable style={[buttonStyles.miniButton, props.style]}
            onPress={handlePressBackButton}>
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
            onAdd={addOneProduct} onRemove={removeOneProduct}
        />
    )

})

interface ClearBasketButtonProps {
    style?: ViewStyle;
    onClear: () => void;
}
export const ClearBasketButton: React.FC<ClearBasketButtonProps> = React.memo((props) => {
    function handlePressClearBasketButton() {
        clearBasketByUserId()
            .then(() => props.onClear())
            .catch((error) => {
                console.error('Ошибка при попытке очистить корзину:', error);
            });;
    }

    return (
        <TouchableOpacity onPress={handlePressClearBasketButton} style={[props.style]}>
            <Text style={{ fontSize: 12, fontFamily: 'Montserrat_400Regular' }}>Очистить корзину </Text>
            <svgIcons.TrashCanIcon></svgIcons.TrashCanIcon>
        </TouchableOpacity>
    )
})

export default {}