import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import { ClearBasketButton } from '../Buttons/ButtonComponents';
import { Montserrat400RegularText } from '../Text/TextComponents';

interface BasketProductListHeaderProps {
    amountOfProducts: string,
    style?: ViewStyle,
    onClear: () => void,
}

const BasketProductListHeader: React.FC<BasketProductListHeaderProps> = React.memo((props) => {
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: 30 }, props.style]}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Montserrat400RegularText
                    text={props.amountOfProducts + ' товара'} />
            </TouchableOpacity>

            <ClearBasketButton onClear={props.onClear} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
        </View>
    )
})

export default React.memo(BasketProductListHeader);