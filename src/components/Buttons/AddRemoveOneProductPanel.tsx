import React from "react"
import { View, ViewStyle, TextStyle, ColorValue, StyleSheet } from "react-native"
import Product from "@/src/interfaces/Product"
import { colorsStyles } from "@/src/styles/styles"
import { RemoveOneProductFromBasket, AddOneProductInBasket } from "./AddRemoveOneProductButtons"
import { Montserrat500MediumText, Montserrat400RegularText } from "../Text/TextComponents"


interface AddRemoveProductInBasketPanelProps {
    style?: ViewStyle | ViewStyle[],
    textStyle?: TextStyle,
    removeButtonStyle?: ViewStyle,
    iconsColor?: ColorValue,
    iconsSize?: number,
    addButtonStyle?: ViewStyle,
    product: Product,
}

const AddRemoveProductInBasketPanel: React.FC<AddRemoveProductInBasketPanelProps> = React.memo(({
    style,
    textStyle,
    removeButtonStyle,
    iconsColor,
    iconsSize,
    addButtonStyle,
    product,
}) => {
    const totalPriceTextColor: ColorValue = textStyle?.color === colorsStyles.mainWhiteColor.color || textStyle?.color === '#fff'
        ? colorsStyles.mainWhiteColor.color
        : colorsStyles.mainDarkGreyColor.color;

    return (
        <View style={[style, styles.container]}>
            <RemoveOneProductFromBasket
                style={[styles.buttonContainer, removeButtonStyle ?? {}]}
                product={product}
                iconColor={iconsColor}
                iconSize={iconsSize}
            />
            <View style={styles.amountInBasketContainer}>
                <Montserrat500MediumText
                    style={textStyle}
                    text={`${product.amountInBasket} шт`}
                />
                <Montserrat400RegularText
                    style={[textStyle ?? {}, { color: totalPriceTextColor, fontSize: 10 }]}
                    text={'200₽'}
                />
            </View>
            <AddOneProductInBasket
                style={[styles.buttonContainer, addButtonStyle ?? {}]}
                product={product}
                iconColor={iconsColor}
                iconSize={iconsSize}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    amountInBasketContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AddRemoveProductInBasketPanel