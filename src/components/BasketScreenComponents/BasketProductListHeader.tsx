import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import { ClearBasketButton } from '../Buttons/ButtonComponents';
import { Montserrat400RegularText } from '../Text/TextComponents';

interface BasketProductListHeaderProps {
    amount: string,
    style?: ViewStyle,
}

const getProductDeclension = (amount: number) => {
    const lastDigit = amount % 10;
    const lastTwoDigits = amount % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return 'товар';
    } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
        return 'товара';
    } else {
        return 'товаров';
    }
};

const BasketProductListHeader: React.FC<BasketProductListHeaderProps> = React.memo((props) => {
    const productDeclension = getProductDeclension(Number(props.amount));

    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: 30 }, props.style]}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Montserrat400RegularText
                    text={props.amount + ' ' + productDeclension} />
            </TouchableOpacity>

            <ClearBasketButton style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
        </View>
    )
})

export default React.memo(BasketProductListHeader);