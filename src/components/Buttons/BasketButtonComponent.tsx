import React from "react"
import { ViewStyle, View, TouchableOpacity } from "react-native"
import svgIcons from "@/src/assets/icons/svgIcons"
import { Montserrat400RegularText } from "../Text/TextComponents"
import { colorsStyles } from "@/src/styles/styles"
import useBasketStore from "@/src/store/basketStore"
import Product from "@/src/interfaces/Product"

interface BasketButtonComponentProps {
    product: Product;
    style?: ViewStyle;
}

export const BasketButtonComponent: React.FC<BasketButtonComponentProps> = React.memo((props) => {
    const addProduct = useBasketStore(({ addProduct }) => addProduct)
    return (
        <TouchableOpacity
            style={[{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                backgroundColor: colorsStyles.mainBrightColor.color,
                borderRadius: 12,
                paddingVertical: 8,
            }, props.style]}

            onPress={() => { addProduct(props.product) }}
        >
            <svgIcons.BasketIcon width={16} height={16} />

            <Montserrat400RegularText
                style={{ color: colorsStyles.mainWhiteColor.color, fontSize: 14 }}
                text="В корзину" />

        </TouchableOpacity>
    )
})

export default React.memo(BasketButtonComponent);