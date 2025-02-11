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
    product: Product,
    style?: ViewStyle,
    addRemovePanelStyle?: ViewStyle,
    iconsSize?: number,
    textStyle?: TextStyle,
    size?: 'mini' | 'medium' | 'big'
}

export const BasketButtonComponent: React.FC<BasketButtonComponentProps> = React.memo((props) => {
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

    function handlePressBasketButton() {
        addProductInBasketAsync(props.product.id).then(() => {
            addOneProduct();
        });
    }

    if (props.product.amountInBasket > 0) {
        if (props.size === 'big') {
            return (
                <AddRemoveProductInBasketPanel
                    style={[buttonStyles.basketButton, props.addRemovePanelStyle || {}]}
                    textStyle={props.textStyle}
                    product={props.product}
                    iconsSize={props.iconsSize ?? 22}
                    onAdd={addOneProduct} onRemove={removeOneProduct} />
            )
        }
        return (
            <AddRemoveProductInBasketPanel
                style={[buttonStyles.basketButton, props.addRemovePanelStyle || {}]}
                textStyle={{ fontSize: 10, color: colorsStyles.mainWhiteColor.color }}
                product={props.product}
                iconsSize={props.iconsSize ?? 16}
                onAdd={addOneProduct} onRemove={removeOneProduct} />
        )
    }

    if (props.size === 'big') {
        return (
            <TouchableOpacity onPress={handlePressBasketButton} style={[buttonStyles.basketButton, props.style]}>
                <svgIcons.BasketIcon
                    {...(props.iconsSize) ?
                        { width: props.iconsSize, height: props.iconsSize } :
                        { width: 22, height: 22 }
                    }
                    stroke={colorsStyles.mainWhiteColor.color}
                    strokeWidth={1.5}
                />
                <Montserrat600SemiBoldText
                    style={[props.textStyle || {}, { color: colorsStyles.mainWhiteColor.color }]}
                    text='В корзину'
                />
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={handlePressBasketButton} style={[buttonStyles.basketButton, props.style]}>
            <svgIcons.BasketIcon width={props.iconsSize ?? 16} height={props.iconsSize ?? 16} stroke={colorsStyles.mainWhiteColor.color}></svgIcons.BasketIcon>
            <Montserrat400RegularText
                style={[props.textStyle || {}, { color: colorsStyles.mainWhiteColor.color, fontSize: 14 }]}
                text='В корзину'
            />
        </TouchableOpacity>
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