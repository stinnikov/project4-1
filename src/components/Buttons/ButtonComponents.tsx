import React, { useState } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import svgIcons from '@/src/assets/icons/svgIcons';
import { colorsStyles, buttonStyles } from '@/src/styles/styles';
import { Product } from '@/src/interfaces/Product';
import AddRemoveProductInBasketPanel from './AddRemoveOneProductPanel';
import useNavigationStore from '@/src/store/navigationStore';





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

export default {}