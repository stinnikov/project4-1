import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import svgIcons from '@/assets/icons/svgIcons';
import { colorsStyles } from '@/src/styles/styles';
import { ClearBasketButton } from '../Buttons/ButtonComponents';
import { Montserrat600SemiBoldText } from '../Text/TextComponents';

interface BasketProductListHeaderProps {
    onClear: () => void,
}

const BasketProductListHeader: React.FC<BasketProductListHeaderProps> = React.memo((props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: 30, marginBottom: 16 }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <svgIcons.SortIcon fill={colorsStyles.mainBrightColor.color} width={18} height={18} />
                <Montserrat600SemiBoldText
                    style={{ color: colorsStyles.mainBrightColor.color }}
                    text='Сортировка' />
            </TouchableOpacity>

            <ClearBasketButton onClear={props.onClear} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
        </View>
    )
})

export default React.memo(BasketProductListHeader);