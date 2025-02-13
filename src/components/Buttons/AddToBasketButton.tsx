import React, { useState } from "react"
import { ViewStyle, TextStyle, TouchableOpacity } from "react-native"
import Product from "@/src/interfaces/Product"
import useBasketStore from "@/src/store/basketStore"
import { addProductInBasketAsync } from "@/src/services/BasketService"
import { buttonStyles, colorsStyles } from "@/src/styles/styles"
import svgIcons from "@/src/assets/icons/svgIcons"
import AddRemoveProductInBasketPanel from "./AddRemoveOneProductPanel"
import { Montserrat400RegularText } from "../Text/TextComponents"

interface BasketButtonComponentProps {
    product: Product,
    style?: ViewStyle,
    iconsSize?: number,
    textStyle?: TextStyle,
}




export const BasketButtonComponent: React.FC<BasketButtonComponentProps> = React.memo((props) => {
    const addProduct = useBasketStore(({ addProduct }) => addProduct)

    // if (props.product.amountInBasket > 0) {
    //     return (
    //         <AddRemoveProductInBasketPanel
    //             style={[buttonStyles.basketButton]}
    //             textStyle={{ fontSize: 10, color: colorsStyles.mainWhiteColor.color }}
    //             product={props.product}
    //             iconsSize={props.iconsSize ?? 16}
    //             />
    //     )
    // }

    return (
        <TouchableOpacity onPress={() => { addProduct(props.product) }} style={[buttonStyles.basketButton, props.style]}>
            <svgIcons.BasketIcon width={props.iconsSize ?? 16} height={props.iconsSize ?? 16} stroke={colorsStyles.mainWhiteColor.color}></svgIcons.BasketIcon>
            <Montserrat400RegularText
                style={[props.textStyle || {}, { color: colorsStyles.mainWhiteColor.color, fontSize: 14 }]}
                text='В корзину'
            />
        </TouchableOpacity>
    )
})

export default BasketButtonComponent;