import React from "react";
import { ViewStyle, TouchableOpacity } from "react-native";
import { Montserrat400RegularText } from "../Text/TextComponents";
import svgIcons from "@/src/assets/icons/svgIcons";
import useBasketStore from "@/src/store/basketStore";

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

export default React.memo(ClearBasketButton);