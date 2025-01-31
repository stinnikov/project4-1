import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import svgIcons from '@/assets/icons/svgIcons';
import { colorsStyles, textStyles } from '@/src/styles/styles';
import { ClearBasketButton } from '../Buttons/ButtonComponents';

interface BasketProductListHeaderProps {
    onClear: () => void,
}

const BasketProductListHeaderComponent: React.FC<BasketProductListHeaderProps> = React.memo((props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: 30, marginBottom: 16 }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <svgIcons.SortIcon fill={colorsStyles.mainBrightColor.color} width={18} height={18} />
                <Text style={textStyles.listTitle}>Сортировка</Text>
            </TouchableOpacity>

            <ClearBasketButton onClear={props.onClear} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
        </View>
    )
})

export default React.memo(BasketProductListHeaderComponent);