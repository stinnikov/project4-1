import React from "react";
import { ViewStyle, ColorValue, TouchableOpacity } from "react-native";
import Product from "@/src/interfaces/Product";
import svgIcons from "@/src/assets/icons/svgIcons";
import { addProductInBasketAsync, deleteProductFromBasket } from "@/src/services/BasketService";
import { colorsStyles } from "@/src/styles/styles";


interface AddButtonProps {
    product: Product;
    style?: ViewStyle | ViewStyle[];
    iconColor?: ColorValue;
    iconSize?: number,
}

export const AddOneProductInBasket: React.FC<AddButtonProps> = React.memo((props) => {
    function handlePressAddOneProductInBasket() {
    }

    return (
        <TouchableOpacity onPress={handlePressAddOneProductInBasket} style={props.style}>
            <svgIcons.PlusIcon width={props.iconSize} height={props.iconSize} stroke={props.iconColor ?? '#fff'}></svgIcons.PlusIcon>
        </TouchableOpacity>
    )
})

interface RemoveButtonProps {
    product: Product;
    style?: ViewStyle | ViewStyle[];
    iconColor?: ColorValue;
    iconSize?: number,
}

export const RemoveOneProductFromBasket: React.FC<RemoveButtonProps> = React.memo((props) => {
    function handlePressRemoveOneProductFromBasket() {
    }

    return (
        <TouchableOpacity onPress={handlePressRemoveOneProductFromBasket} style={props.style}>
            <svgIcons.MinusIcon width={props.iconSize ?? 24} height={props.iconSize ?? 24} stroke={props.iconColor ?? colorsStyles.mainWhiteColor.color}></svgIcons.MinusIcon>
        </TouchableOpacity>
    )
})

export default { RemoveOneProductFromBasket, AddOneProductInBasket }